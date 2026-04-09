import { useEffect, useRef } from "react";

export const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles = [];
    let animationFrameId;

    // Config
    const CONNECTION_DISTANCE = 150;
    const MOUSE_RADIUS = 200;
    const PARTICLE_SPEED = 0.4;
    const COLORS = ["rgba(59, 130, 246, ", "rgba(34, 211, 238, "]; // blue-500, cyan-400

    let mouse = {
      x: null,
      y: null,
      radius: MOUSE_RADIUS,
    };

    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseOut = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      constructor(x, y, dx, dy, size, color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.size = size;
        this.color = color;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color + "0.8)";
        ctx.fill();

        // Add a subtle glow
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color + "1)";
      }

      update() {
        this.x += this.dx;
        this.y += this.dy;

        // Bounce off edges
        if (this.x + this.size > canvas.width || this.x - this.size < 0) {
          this.dx = -this.dx;
        }
        if (this.y + this.size > canvas.height || this.y - this.size < 0) {
          this.dy = -this.dy;
        }

        // Mouse interaction (repel gently)
        if (mouse.x != null && mouse.y != null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance > 0 && distance < mouse.radius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;
            const maxSpeed = 2;

            this.x -= forceDirectionX * force * maxSpeed;
            this.y -= forceDirectionY * force * maxSpeed;
          }
        }

        this.draw();
      }
    }

    const initParticles = () => {
      particles = [];
      const particleCount = (canvas.width * canvas.height) / 15000;
      const clampedCount = Math.min(Math.max(particleCount, 40), 120);

      for (let i = 0; i < clampedCount; i++) {
        const size = Math.random() * 2 + 0.5;
        const x = Math.random() * (canvas.width - size * 2) + size;
        const y = Math.random() * (canvas.height - size * 2) + size;
        const dx = (Math.random() - 0.5) * PARTICLE_SPEED;
        const dy = (Math.random() - 0.5) * PARTICLE_SPEED;
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];

        particles.push(new Particle(x, y, dx, dy, size, color));
      }
    };

    const connectParticles = () => {
      ctx.shadowBlur = 0;

      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const distance =
            (particles[a].x - particles[b].x) *
              (particles[a].x - particles[b].x) +
            (particles[a].y - particles[b].y) *
              (particles[a].y - particles[b].y);

          if (distance < CONNECTION_DISTANCE * CONNECTION_DISTANCE) {
            const opacityValue =
              1 - distance / (CONNECTION_DISTANCE * CONNECTION_DISTANCE);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(100, 150, 255, ${opacityValue * 0.25})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }
      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full opacity-35 blur-[1px]"
    />
  );
};
