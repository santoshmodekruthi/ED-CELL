import React, { useEffect, useRef, useState } from "react";

const DEFAULT_LABELS = ["IDEAS", "STUDENTS", "MENTORS", "ENTREPRENEURS", "INNOVATION", "STARTUPS"];

const ACCENT_COLORS = ["#A855F7", "#EC4899", "#F97316", "#F472B6"];

export default function InnovationEcosystem({ coreLabel = "ED CELL", nodeLabels = [] }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [hoveredNode, setHoveredNode] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId;

    let width = (canvas.width = containerRef.current.clientWidth || 400);
    let height = (canvas.height = containerRef.current.clientHeight || 400);

    const handleResize = () => {
      if (!containerRef.current) return;
      width = canvas.width = containerRef.current.clientWidth;
      height = canvas.height = containerRef.current.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    const outerLabels = nodeLabels && nodeLabels.length > 0 ? nodeLabels : DEFAULT_LABELS;
    
    // Create center node object with core characteristics
    const centerNode = {
      x: width / 2,
      y: height / 2,
      label: coreLabel,
      radius: 20
    };

    // Keep ecosystem compact as specified
    const orbitRadius = Math.min(width, height) * 0.28;

    const nodes = outerLabels.map((label, idx) => {
      const angle = (idx / outerLabels.length) * Math.PI * 2;
      const speed = 0.001 + Math.random() * 0.001;
      const direction = Math.random() > 0.5 ? 1 : -1;
      return {
        label,
        angle,
        speed: speed * direction,
        radius: 4.5, // Small glowing circular nodes
        color: ACCENT_COLORS[idx % ACCENT_COLORS.length],
        dist: orbitRadius * (0.8 + Math.random() * 0.25),
        phase: Math.random() * Math.PI * 2,
        x: 0,
        y: 0
      };
    });

    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      mouse.targetX = (mx - width / 2) * 0.12;
      mouse.targetY = (my - height / 2) * 0.12;
    };

    const handleMouseLeave = () => {
      mouse.targetX = 0;
      mouse.targetY = 0;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Interpolate mouse parallax
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      const cx = width / 2 + mouse.x;
      const cy = height / 2 + mouse.y;

      centerNode.x = cx;
      centerNode.y = cy;

      // Update surrounding node positions
      nodes.forEach((node) => {
        node.angle += node.speed;
        
        // Radial floating drift
        const radialOffset = Math.sin(node.angle * 2 + node.phase) * 5;
        const currentDist = node.dist + radialOffset;

        node.x = cx + Math.cos(node.angle) * currentDist;
        node.y = cy + Math.sin(node.angle) * currentDist;
      });

      // 1. Draw connecting lines (very thin, barely visible)
      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(node.x, node.y);
        ctx.strokeStyle = "rgba(168, 85, 247, 0.07)";
        ctx.lineWidth = 0.55;
        ctx.stroke();

        // Faint links between neighbors
        nodes.forEach((other) => {
          if (other === node) return;
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(236, 72, 153, ${(1 - dist / 110) * 0.035})`;
            ctx.lineWidth = 0.45;
            ctx.stroke();
          }
        });
      });

      // 2. Draw Central Node Core
      // Outer purple glow
      ctx.shadowBlur = 25;
      ctx.shadowColor = "rgba(168, 85, 247, 0.85)";

      // Draw soft white/purple edge ring
      ctx.beginPath();
      ctx.arc(cx, cy, centerNode.radius + 1.2, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
      ctx.fill();

      // Draw core radial gradient (pink inner glow + purple)
      const grad = ctx.createRadialGradient(cx, cy, 1, cx, cy, centerNode.radius);
      grad.addColorStop(0, "#FFFFFF");           // Glowing center
      grad.addColorStop(0.3, "#EC4899");         // Pink inner glow
      grad.addColorStop(0.7, "#A855F7");         // Purple core
      grad.addColorStop(1, "#7C3AED");           // Edge shadow

      ctx.beginPath();
      ctx.arc(cx, cy, centerNode.radius, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      // Text inside core
      ctx.shadowBlur = 0;
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 8.5px 'Poppins', sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(centerNode.label, cx, cy);

      // 3. Draw Orbiting Nodes
      const pulseTime = Date.now() * 0.0035;

      nodes.forEach((node) => {
        const isHovered = hoveredNode === node;
        const pulse = 1 + Math.sin(pulseTime + node.phase) * 0.12;
        const radius = isHovered ? node.radius * 1.35 * pulse : node.radius * pulse;

        ctx.shadowBlur = isHovered ? 12 : 5;
        ctx.shadowColor = node.color;
        
        // Small circular outline (ring)
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.strokeStyle = node.color;
        ctx.lineWidth = 1.55;
        ctx.stroke();

        // Dark transparent interior fill
        ctx.fillStyle = "rgba(10, 7, 15, 0.85)";
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius - 0.75, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowBlur = 0; // Reset shadow for label
        
        // Surrounding Node Labels
        ctx.fillStyle = isHovered ? "#FFFFFF" : "#A1A1AA";
        ctx.font = isHovered ? "bold 8px 'Poppins', sans-serif" : "600 7.5px 'Poppins', sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(node.label, node.x, node.y - radius - 6);
      });

      animationId = requestAnimationFrame(animate);
    };

    const detectHover = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;

      let found = null;
      nodes.forEach((node) => {
        const dx = node.x - mx;
        const dy = node.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < node.radius * 2.5 + 5) {
          found = node;
        }
      });
      setHoveredNode(found);
    };

    canvas.addEventListener("mousemove", detectHover);

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      canvas.removeEventListener("mousemove", detectHover);
      cancelAnimationFrame(animationId);
    };
  }, [coreLabel, nodeLabels, hoveredNode]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[22rem] sm:h-[26rem] md:h-[30rem] lg:h-[34rem] flex items-center justify-center overflow-visible select-none"
    >
      <canvas ref={canvasRef} className="absolute inset-0 z-0 cursor-pointer" />
    </div>
  );
}
