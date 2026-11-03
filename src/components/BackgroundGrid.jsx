import React, { useEffect, useState } from 'react';

export default function BackgroundGrid() {
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device has fine pointer
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Background radial gradient mesh */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full bg-blue-600/10 blur-[130px]" />
      <div className="absolute top-[35%] right-[-15%] w-[450px] h-[450px] sm:w-[650px] sm:h-[650px] rounded-full bg-violet-600/8 blur-[140px]" />
      <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] rounded-full bg-indigo-600/8 blur-[130px]" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      {/* Subtle mouse spotlight glow on desktop */}
      {!isMobile && (
        <div
          className="absolute w-[600px] h-[600px] rounded-full bg-radial from-blue-500/8 via-indigo-500/4 to-transparent blur-[80px] transition-transform duration-200 ease-out"
          style={{
            transform: `translate(${mousePos.x - 300}px, ${mousePos.y - 300}px)`,
          }}
        />
      )}
    </div>
  );
}
