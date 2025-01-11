// src/components/sections/Hero/components/ParticleField.jsx
import React, { useEffect, useRef } from 'react';
import { useMousePosition } from '../../../../hooks/useMousePosition';  // Updated import

const ParticleField = () => {
  const canvasRef = useRef(null);
  const mousePosition = useMousePosition();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Particle system
    const particles = [];
    const particleCount = 100;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * 1000;
        this.size = Math.random() * 2 + 0.5;
        this.speed = Math.random() * 0.2 + 0.1;
        this.brightness = Math.random();
        this.color = `rgba(255, 255, 255, ${this.brightness * 0.5})`;
      }

      move() {
        this.z -= this.speed;
        if (this.z <= 1) {
          this.z = 1000;
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }
      }

      draw() {
        const scale = 1000 / this.z;
        const x = (this.x - canvas.width/2) * scale + canvas.width/2;
        const y = (this.y - canvas.height/2) * scale + canvas.height/2;
        const size = this.size * scale;

        // Calculate distance from mouse for interaction
        const mouseX = mousePosition?.x || canvas.width/2;
        const mouseY = mousePosition?.y || canvas.height/2;
        const dx = x - mouseX;
        const dy = y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 200;
        const influence = Math.max(0, 1 - distance/maxDistance);

        // Draw particle with mouse interaction glow
        ctx.beginPath();
        ctx.arc(
          x + dx * influence * 0.2,
          y + dy * influence * 0.2,
          size * (1 + influence),
          0,
          Math.PI * 2
        );

        // Create gradient for glow effect
        const gradient = ctx.createRadialGradient(
          x, y, 0,
          x, y, size * 2
        );

        const alpha = (this.brightness * 0.5 + influence * 0.5) * (1 - this.z / 1000);
        gradient.addColorStop(0, `rgba(59, 130, 246, ${alpha})`);  // Blue core
        gradient.addColorStop(0.4, `rgba(139, 92, 246, ${alpha * 0.5})`);  // Purple mid
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');  // Transparent edge

        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    let animationFrameId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        particle.move();
        particle.draw();
      });

      // Optional: Draw connections between nearby particles
      particles.forEach((particle1, i) => {
        particles.slice(i + 1).forEach(particle2 => {
          const dx = particle1.x - particle2.x;
          const dy = particle1.y - particle2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance/150)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle1.x, particle1.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePosition]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{
        background: 'transparent',
        mixBlendMode: 'screen',
      }}
    />
  );
};

export default ParticleField;