import React, { useEffect, useRef } from "react";

/**
 * Very subtle white/light-blue animated background.
 * Renders tiny floating particles + faint connection lines + soft gradient blobs.
 * Extremely light — website stays predominantly white.
 */
export default function AnimatedBackground() {
  const canvasRef = useRef(null);
  const frameRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, tx: 0, ty: 0 });
  const hiddenRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const mobile = window.innerWidth < 768;

    let W, H;
    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouse = (e) => {
      mouseRef.current.tx = (e.clientX - W / 2) * 0.018;
      mouseRef.current.ty = (e.clientY - H / 2) * 0.018;
    };
    window.addEventListener("mousemove", onMouse);

    const onVis = () => { hiddenRef.current = document.hidden; };
    document.addEventListener("visibilitychange", onVis);

    // ─── SOFT GRADIENT BLOBS ────────────────────────────────────
    const blobs = [
      { bx: 0.15, by: 0.2, r: 380, aX: 0, aY: 0.5, sX: 0.0003, sY: 0.0002, amp: 80 },
      { bx: 0.85, by: 0.75, r: 420, aX: 2, aY: 1, sX: 0.00025, sY: 0.00035, amp: 70 },
      { bx: 0.5, by: 0.5, r: 300, aX: 1, aY: 2, sX: 0.0004, sY: 0.0003, amp: 60 },
    ];

    // ─── TINY PARTICLES ─────────────────────────────────────────
    const count = mobile ? 20 : 48;
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * 1920,
      y: Math.random() * 1080,
      r: 1 + Math.random() * 1.8,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      alpha: 0.04 + Math.random() * 0.1,
      pA: Math.random() * Math.PI * 2,
      pS: 0.004 + Math.random() * 0.006,
    }));

    const draw = () => {
      if (hiddenRef.current) { frameRef.current = requestAnimationFrame(draw); return; }

      ctx.clearRect(0, 0, W, H);
      const m = mouseRef.current;
      m.x += (m.tx - m.x) * 0.04;
      m.y += (m.ty - m.y) * 0.04;

      // Soft gradient blobs (very faint blue)
      blobs.forEach(b => {
        b.aX += b.sX; b.aY += b.sY;
        const nx = b.bx * W + Math.cos(b.aX) * b.amp + m.x * 0.25;
        const ny = b.by * H + Math.sin(b.aY) * b.amp + m.y * 0.25;
        const g = ctx.createRadialGradient(nx, ny, 0, nx, ny, b.r);
        g.addColorStop(0, "rgba(37,99,235,0.028)");
        g.addColorStop(0.5, "rgba(147,197,253,0.012)");
        g.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(nx, ny, b.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Particles + optional nearby connection lines
      particles.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        p.pA += p.pS;

        const px = p.x + m.x * 0.3;
        const py = p.y + m.y * 0.3;
        const pr = p.r * (1 + Math.sin(p.pA) * 0.15);

        // Draw particle
        ctx.beginPath();
        ctx.arc(px, py, pr, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(37,99,235,${p.alpha})`;
        ctx.fill();

        // Very faint lines to nearby particles
        if (!mobile) {
          for (let j = i + 1; j < particles.length; j++) {
            const q = particles[j];
            const qx = q.x + m.x * 0.3;
            const qy = q.y + m.y * 0.3;
            const dx = qx - px, dy = qy - py;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 120) {
              ctx.beginPath();
              ctx.moveTo(px, py);
              ctx.lineTo(qx, qy);
              ctx.strokeStyle = `rgba(37,99,235,${0.04 * (1 - dist / 120)})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      });

      frameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
      document.removeEventListener("visibilitychange", onVis);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-50 pointer-events-none w-full h-full"
      style={{ background: "transparent" }}
    />
  );
}
