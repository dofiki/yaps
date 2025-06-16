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
      className="hidden pointer-events-none  sm:block fixed z-[9999] 
      w-6 h-6 rounded-full invert-blend "
      style={{
        transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
      }}
    />
  );
}

export default InvertLens;
