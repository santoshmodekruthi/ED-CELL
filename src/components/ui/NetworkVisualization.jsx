import React, { useEffect, useRef } from "react";

export default function NetworkVisualization({
  labels = ["ED CELL", "STUDENTS", "IDEAS", "ENTREPRENEURS", "MENTORS", "STARTUPS", "EVENTS", "INNOVATION"],
}) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, tx: 0, ty: 0 });
  const frameRef = useRef(null);
  const mobile = typeof window !== "undefined" && window.innerWidth < 768;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W, H, nodes = [];
    const isMob = window.innerWidth < 768;

    const resize = () => {
      const p = canvas.parentElement;
      W = canvas.width = (p ? p.clientWidth : 500) || 500;
      H = canvas.height = (p ? p.clientHeight : 400) || 400;
      buildNodes();
    };

    const buildNodes = () => {
      // Center node + surrounding nodes on orbit
      const orbitR = Math.min(W, H) * 0.31;
      nodes = labels.map((label, i) => {
        const isCenter = i === 0;
        const angle = ((i - 1) / (labels.length - 1)) * Math.PI * 2 - Math.PI / 2;
        return {
          label, isCenter,
          bx: isCenter ? W / 2 : W / 2 + Math.cos(angle) * orbitR,
          by: isCenter ? H / 2 : H / 2 + Math.sin(angle) * orbitR,
          x: 0, y: 0,
          vx: (Math.random() - 0.5) * 0.12,
          vy: (Math.random() - 0.5) * 0.12,
          ox: 0, oy: 0,
          pA: Math.random() * Math.PI * 2,
          pS: 0.008 + Math.random() * 0.01,
          orbitAngle: angle,
          orbitSpeed: 0.001 + Math.random() * 0.0008,
          orbitDir: Math.random() > 0.5 ? 1 : -1,
        };
      });
    };

    resize();
    window.addEventListener("resize", resize);

    const parent = canvas.parentElement;
    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.tx = (e.clientX - rect.left - W / 2) * 0.04;
      mouseRef.current.ty = (e.clientY - rect.top - H / 2) * 0.04;
    };
    if (parent) parent.addEventListener("mousemove", onMove);

    // Orbit particles (tiny dots that travel along the orbit ring)
    const orbitR = () => Math.min(W, H) * 0.31;
    const orbitDots = isMob ? [] : Array.from({ length: 5 }, () => ({
      angle: Math.random() * Math.PI * 2,
      speed: 0.008 + Math.random() * 0.008,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const m = mouseRef.current;
      m.x += (m.tx - m.x) * 0.06;
      m.y += (m.ty - m.y) * 0.06;
      const cx = W / 2 + m.x * 0.3;
      const cy = H / 2 + m.y * 0.3;
      const oR = orbitR();

      // ── Orbit ring ──
      ctx.beginPath();
      ctx.arc(cx, cy, oR, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(37,99,235,0.08)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // ── Orbit travelling dots ──
      orbitDots.forEach(d => {
        d.angle += d.speed;
        const ox = cx + Math.cos(d.angle) * oR;
        const oy = cy + Math.sin(d.angle) * oR;
        ctx.beginPath();
        ctx.arc(ox, oy, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(37,99,235,0.35)";
        ctx.fill();
      });

      // ── Update nodes ──
      nodes.forEach(n => {
        n.pA += n.pS;
        if (!n.isCenter) {
          // Slowly orbit around center
          n.orbitAngle += n.orbitSpeed * n.orbitDir;
          n.bx = W / 2 + Math.cos(n.orbitAngle) * oR;
          n.by = H / 2 + Math.sin(n.orbitAngle) * oR;
        }
        // Gentle float
        n.ox += n.vx; n.oy += n.vy;
        if (Math.abs(n.ox) > 8) n.vx *= -1;
        if (Math.abs(n.oy) > 8) n.vy *= -1;
        n.x = n.bx + n.ox + m.x * (n.isCenter ? 0.2 : 0.5);
        n.y = n.by + n.oy + m.y * (n.isCenter ? 0.2 : 0.5);
      });

      // ── Connection lines ──
      nodes.forEach((a, i) => {
        if (i === 0) return;
        // Line to center
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(nodes[0].x, nodes[0].y);
        ctx.strokeStyle = "rgba(37,99,235,0.07)";
        ctx.lineWidth = 0.75;
        ctx.stroke();
      });

      // ── Draw nodes ──
      nodes.forEach(n => {
        const pulse = 1 + Math.sin(n.pA) * 0.06;
        if (n.isCenter) {
          // Center glow
          const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, 60);
          grd.addColorStop(0, "rgba(37,99,235,0.10)");
          grd.addColorStop(1, "rgba(37,99,235,0)");
          ctx.fillStyle = grd;
          ctx.beginPath();
          ctx.arc(n.x, n.y, 60, 0, Math.PI * 2);
          ctx.fill();

          // Center circle bg
          ctx.beginPath();
          ctx.arc(n.x, n.y, 36 * pulse, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(255,255,255,0.95)";
          ctx.strokeStyle = "rgba(37,99,235,0.25)";
          ctx.lineWidth = 1.5;
          ctx.fill();
          ctx.stroke();

          // Center label
          ctx.font = "bold 9px 'Space Grotesk', sans-serif";
          ctx.fillStyle = "#2563EB";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText("ED CELL", n.x, n.y - 5);
          ctx.font = "bold 7.5px 'Inter', sans-serif";
          ctx.fillStyle = "#64748B";
          ctx.fillText("VIIT", n.x, n.y + 8);
        } else {
          // Outer glow
          const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, 24);
          grd.addColorStop(0, "rgba(37,99,235,0.06)");
          grd.addColorStop(1, "rgba(37,99,235,0)");
          ctx.fillStyle = grd;
          ctx.beginPath();
          ctx.arc(n.x, n.y, 24, 0, Math.PI * 2);
          ctx.fill();

          // Node circle
          ctx.beginPath();
          ctx.arc(n.x, n.y, 6 * pulse, 0, Math.PI * 2);
          ctx.fillStyle = "#FFFFFF";
          ctx.strokeStyle = "rgba(37,99,235,0.35)";
          ctx.lineWidth = 1.5;
          ctx.shadowBlur = 8;
          ctx.shadowColor = "rgba(37,99,235,0.2)";
          ctx.fill();
          ctx.stroke();
          ctx.shadowBlur = 0;

          // Label
          ctx.font = "600 7.5px 'Inter', sans-serif";
          ctx.fillStyle = "#475569";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(n.label, n.x, n.y - 14);
        }
      });

      frameRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      window.removeEventListener("resize", resize);
      if (parent) parent.removeEventListener("mousemove", onMove);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [labels]);

  return (
    <div className="relative w-full flex items-center justify-center select-none overflow-hidden" style={{ height: "min(420px, 55vw)" }}>
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
