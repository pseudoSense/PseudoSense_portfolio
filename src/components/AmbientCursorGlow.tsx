import React, { useEffect, useState, useRef } from 'react';

export const AmbientCursorGlow: React.FC = () => {
  const [enabled, setEnabled] = useState(true);
  const glowRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -1000, y: -1000 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setEnabled(false);
      return;
    }

    const handlePointerMove = (e: PointerEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };

      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(() => {
          if (glowRef.current) {
            glowRef.current.style.transform = `translate3d(${posRef.current.x - 300}px, ${posRef.current.y - 300}px, 0)`;
          }
          rafRef.current = null;
        });
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 w-[600px] h-[600px] rounded-full z-30 transition-opacity duration-300 opacity-60 mix-blend-screen will-change-transform"
      style={{
        background: 'radial-gradient(circle at center, rgba(56, 189, 248, 0.12) 0%, rgba(99, 102, 241, 0.05) 40%, transparent 70%)',
        transform: 'translate3d(-1000px, -1000px, 0)',
      }}
    />
  );
};
