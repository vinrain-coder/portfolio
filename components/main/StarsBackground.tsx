"use client";

import React, { useEffect, useRef, useState } from "react";

const createStar = (id: number) => {
  const size = Math.random() * 2 + 0.5;
  const x = Math.random() * 100;
  const y = Math.random() * 100;
  const duration = Math.random() * 10 + 5;
  
  const randomOffset = () => Math.random() * 100 - 50;

  const animation = `
    @keyframes move-${id} {
      0% { transform: translate(${randomOffset()}%, ${randomOffset()}%); }
      25% { transform: translate(${randomOffset()}%, ${randomOffset()}%); }
      50% { transform: translate(${randomOffset()}%, ${randomOffset()}%); }
      75% { transform: translate(${randomOffset()}%, ${randomOffset()}%); }
      100% { transform: translate(${randomOffset()}%, ${randomOffset()}%); }
    }
  `;

  return { id, size, x, y, duration, animation };
};

const StarsBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [stars, setStars] = useState<Array<{ id: number; size: number; x: number; y: number; duration: number; animation: string }>>([]);

  useEffect(() => {
    const numStars = 100;
    const initialStars = Array.from({ length: numStars }, (_, i) => createStar(i));
    setStars(initialStars);

    initialStars.forEach(star => {
      const styleSheet = document.createElement("style");
      styleSheet.type = "text/css";
      styleSheet.innerText = star.animation;
      document.head.appendChild(styleSheet);
    });

    return () => {
      document.head.querySelectorAll('style').forEach(style => style.remove());
    };
  }, []);

  const containerStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    zIndex: 10,
    overflow: "hidden",
    pointerEvents: "none",
  };

  return (
    <div ref={containerRef} style={containerStyle}>
      {stars.map(star => (
        <div
          key={star.id}
          style={{
            position: "absolute",
            width: `${star.size}px`,
            height: `${star.size}px`,
            borderRadius: "50%",
            backgroundColor: "white",
            opacity: Math.random(),
            left: `${star.x}%`,
            top: `${star.y}%`,
            transform: "translate(-50%, -50%)",
            animation: `move-${star.id} ${star.duration}s infinite alternate ease-in-out`,
          }}
        />
      ))}
    </div>
  );
};

export default StarsBackground;


