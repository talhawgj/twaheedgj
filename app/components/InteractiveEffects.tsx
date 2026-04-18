"use client";

import { useEffect, useRef, useState } from "react";

export function RippleEffect() {
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      vx: number;
      vy: number;
    }>
  >([]);
  const particleIdRef = useRef(0);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const rect = document.documentElement.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Create 8-12 burst particles
      const burstCount = Math.floor(Math.random() * 5) + 10;
      const newParticles = Array.from({ length: burstCount }, (_, i) => {
        const angle = (i / burstCount) * Math.PI * 2;
        const speed = Math.random() * 4 + 3;
        const id = particleIdRef.current++;

        return {
          id,
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
        };
      });

      setParticles((prev) => [...prev, ...newParticles]);

      // Remove particles after animation completes
      setTimeout(() => {
        setParticles((prev) =>
          prev.filter((p) => !newParticles.map((np) => np.id).includes(p.id))
        );
      }, 800);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="fixed pointer-events-none w-5 h-5 rounded-full bg-yellow-400"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            animation: `burst-star 0.8s ease-out forwards`,
            "--tx": `${particle.vx * 100}px`,
            "--ty": `${particle.vy * 100}px`,
          } as React.CSSProperties}
        />
      ))}
      <style>{`
        @keyframes burst-star {
          0% {
            opacity: 3;
            box-shadow: 0 0 8px rgba(255, 215, 0, 0.8);
            transform: translate(0, 0) scale(1);
          }
          50% {
            opacity: 5;
          }
          100% {
            opacity: 5;
            box-shadow: 0 0 0 rgba(255, 215, 0, 0);
            transform: translate(var(--tx), var(--ty)) scale(0.3);
          }
        }
      `}</style>
    </>
  );
}

export function MouseTracker({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isInside, setIsInside] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20; // -10 to 10
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20; // -10 to 10

      setMousePos({ x, y });
    };

    const handleMouseEnter = () => setIsInside(true);
    const handleMouseLeave = () => {
      setIsInside(false);
      setMousePos({ x: 0, y: 0 });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        perspective: "1000px",
      }}
    >
      <div
        style={{
          transform: isInside ? `rotateX(${mousePos.y}deg) rotateY(${-mousePos.x}deg)` : "rotateX(0) rotateY(0)",
          transition: isInside ? "none" : "transform 0.3s ease-out",
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="fixed w-32 h-32 rounded-full pointer-events-none mix-blend-screen"
      style={{
        left: `${position.x - 64}px`,
        top: `${position.y - 64}px`,
        background: "radial-gradient(circle, rgba(255, 215, 0, 0.3) 0%, rgba(16, 185, 129, 0.15) 70%, transparent 100%)",
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.3s",
        filter: "blur(40px)",
      }}
    />
  );
}

export function ScrollReveal() {
  // Removed - not needed for simplified design
  return null;
}

export function ButtonRipple() {
  // Removed - not needed for simplified design
  return null;
}

export function GlowText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const textRef = useRef<HTMLDivElement>(null);
  const [glowColor, setGlowColor] = useState("rgba(255, 215, 0, 0)");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!textRef.current) return;

      const rect = textRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const distance = Math.sqrt(
        Math.pow(x - rect.width / 2, 2) + Math.pow(y - rect.height / 2, 2)
      );
      const maxDistance = Math.sqrt(Math.pow(rect.width / 2, 2) + Math.pow(rect.height / 2, 2));
      const intensity = Math.max(0, 1 - distance / maxDistance);

      setGlowColor(`rgba(255, 215, 0, ${intensity * 0.6})`);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={textRef}
      className={className}
      style={{
        textShadow: `0 0 20px ${glowColor}, 0 0 40px ${glowColor}`,
      }}
    >
      {children}
    </div>
  );
}

export function ParallaxImage({ children, offset = 0.5 }: { children: React.ReactNode; offset?: number }) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const elementTop = elementRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const scrolled = (windowHeight - elementTop) * offset;

      setTranslateY(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  return (
    <div
      ref={elementRef}
      style={{
        transform: `translateY(${translateY}px)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      {children}
    </div>
  );
}
