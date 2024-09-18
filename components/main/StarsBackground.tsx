"use client";

import React, { useEffect, useRef, useState } from "react";

const createStar = (id: number) => {
  const size = Math.random() * 2 + 0.5;
  const x = Math.random() * 100;
  const y = Math.random() * 100;
  const duration = Math.random() * 10 + 5;
  return { id, size, x, y, duration };
};

const StarsBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [stars, setStars] = useState<
    Array<{ id: number; size: number; x: number; y: number; duration: number }>
  >([]);

  useEffect(() => {
    const numStars = 100;
    const initialStars = Array.from({ length: numStars }, (_, i) =>
      createStar(i)
    );
    setStars(initialStars);

    const keyframes = `
      @keyframes twinkle {
        0% { opacity: 0.5; }
        50% { opacity: 1; }
        100% { opacity: 0.5; }
      }
    `;
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = keyframes;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  useEffect(() => {
    const animateStars = () => {
      if (containerRef.current) {
        const updatedStars = stars.map((star) => {
          const size = Math.random() * 2 + 0.5;
          const x = Math.random() * 100;
          const y = Math.random() * 100;
          const duration = Math.random() * 10 + 5;
          return { ...star, size, x, y, duration };
        });
        setStars(updatedStars);
      }
    };

    const intervalId = setInterval(animateStars, 1000);

    return () => clearInterval(intervalId);
  }, [stars]);

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
      {stars.map((star) => (
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
            animation: `twinkle ${star.duration}s infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default StarsBackground;
