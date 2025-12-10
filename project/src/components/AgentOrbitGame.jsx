import { useEffect, useRef } from "react";

export default function AgentOrbitGame() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext("2d");

    canvas.width = 300;
    canvas.height = 300;

    let mouse = { x: 150, y: 150 };
    const nodes = [];

    for (let i = 0; i < 6; i++) {
      nodes.push({
        angle: Math.random() * Math.PI * 2,
        radius: 60 + Math.random() * 40,
        speed: 0.01 + Math.random() * 0.02,
      });
    }

    canvas.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });

    function animate() {
      c.clearRect(0, 0, canvas.width, canvas.height);

      // main AI agent
      c.beginPath();
      c.arc(mouse.x, mouse.y, 10, 0, Math.PI * 2);
      c.fillStyle = "#00eaff";
      c.shadowColor = "#00eaff";
      c.shadowBlur = 20;
      c.fill();
      c.shadowBlur = 0;

      // orbiting nodes
      nodes.forEach((node) => {
        node.angle += node.speed;
        const x = mouse.x + Math.cos(node.angle) * node.radius;
        const y = mouse.y + Math.sin(node.angle) * node.radius;

        // connecting line
        c.beginPath();
        c.moveTo(mouse.x, mouse.y);
        c.lineTo(x, y);
        c.strokeStyle = "#00eaff33";
        c.lineWidth = 2;
        c.stroke();

        // orbiting node
        c.beginPath();
        c.arc(x, y, 6, 0, Math.PI * 2);
        c.fillStyle = "#00eaff";
        c.shadowColor = "#00eaff";
        c.shadowBlur = 15;
        c.fill();
        c.shadowBlur = 0;
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full rounded-full cursor-pointer"
    />
  );
}
