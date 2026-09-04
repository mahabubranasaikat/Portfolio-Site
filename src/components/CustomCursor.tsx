import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [smoothPos, setSmoothPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const targetPos = useRef({ x: -100, y: -100 });
  const currentSmoothPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Only enable on devices that support fine pointer (mouse/trackpad)
    if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest('a, button, input, textarea, select, label, [role="button"], .cursor-pointer, .card-modern, .skill-item')
        );
        setIsHovered(isInteractive);
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    // Smooth animation loop for the trailing ring
    const animate = () => {
      const lerpFactor = 0.2;
      currentSmoothPos.current.x += (targetPos.current.x - currentSmoothPos.current.x) * lerpFactor;
      currentSmoothPos.current.y += (targetPos.current.y - currentSmoothPos.current.y) * lerpFactor;

      setSmoothPos({
        x: currentSmoothPos.current.x,
        y: currentSmoothPos.current.y,
      });

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Dynamic Cursor Ambient Spotlight Follower */}
      <div
        className="fixed pointer-events-none z-0 rounded-full blur-[80px] opacity-40 dark:opacity-60 transition-opacity duration-300 hidden md:block"
        style={{
          width: 320,
          height: 320,
          transform: `translate3d(${smoothPos.x - 160}px, ${smoothPos.y - 160}px, 0)`,
          background: 'radial-gradient(circle, rgba(220, 38, 38, 0.12) 0%, rgba(220, 38, 38, 0.02) 50%, transparent 70%)',
        }}
      />

      {/* Smooth Trailing Ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998] hidden md:block"
        style={{
          transform: `translate3d(${smoothPos.x}px, ${smoothPos.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        <div
          className={`rounded-full border transition-all duration-200 ease-out ${
            isHovered
              ? 'w-11 h-11 border-red/90 bg-red/10 shadow-[0_0_16px_rgba(255,59,48,0.35)] scale-110'
              : isClicked
              ? 'w-5 h-5 border-red bg-red/25'
              : 'w-7 h-7 border-red/50 dark:border-red/60 bg-red/5'
          }`}
        />
      </div>

      {/* Sharp Precise Center Dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        <div
          className={`rounded-full bg-red transition-all duration-150 ${
            isClicked
              ? 'w-1.5 h-1.5'
              : isHovered
              ? 'w-2.5 h-2.5 shadow-[0_0_10px_#ff3b30]'
              : 'w-2 h-2 shadow-[0_0_6px_#ff3b30]'
          }`}
        />
      </div>
    </>
  );
}
