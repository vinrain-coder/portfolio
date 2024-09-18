"use client";

import React, { useEffect, useRef, useState } from "react";

const StarsBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [stars, setStars] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const numStars = 100; // Number of stars
    const generatedStars = [];

    for (let i = 0; i < numStars; i++) {
      const size = Math.random() * 2 + 0.5;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const duration = Math.random() * 10 + 5;

      generatedStars.push(
        <div
          key={i}
          style={{
            position: "absolute",
            width: size,
            height: size,
            borderRadius: "50%",
            backgroundColor: "white",
            opacity: Math.random(),
            left: `${x}%`,
            top: `${y}%`,
            transform: `translate(-50%, -50%)`,
            animation: `twinkle ${duration}s infinite`,
          }}
        />
      );
    }

    setStars(generatedStars);

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

  const containerStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    zIndex: 1,
    overflow: "hidden",
    pointerEvents: "none",
  };

  return (
    <div ref={containerRef} style={containerStyle}>
      {stars}
    </div>
  );
};

export default StarsBackground;

