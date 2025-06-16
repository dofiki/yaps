import React, { useEffect, useState } from 'react';

function InvertLens() {
  const [position, setPosition] = useState({ x: -9999, y: -9999 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <div
      className="hidden pointer-events-none  sm:block fixed z-[9999] w-30 h-30 rounded-full invert-blend transition-transform duration-10"
      style={{
        transform: `translate(${position.x - 60}px, ${position.y - 60}px)`,
      }}
    />
  );
}

export default InvertLens;
