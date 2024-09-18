"use client";

import React, { useEffect, useRef, useState } from "react";

const StarsBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [stars, setStars] = useState<JSX.Element[]>([]);
  
  useEffect(() => {
    const numStars = 100; // Number of stars
    const generatedStars: JSX.Element[] = [];

    for (let i = 0; i < numStars; i++) {
      const size = Math.random() * 2 + 0.5;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const duration = Math.random() * 10 + 5;

      generatedStars.push({
        size,
        x,
        y,
        duration,
        id: i,
      });
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

  useEffect(() => {
    const animateStars = () => {
      const stars = containerRef.current?.childNodes as NodeListOf<HTMLDivElement>;
      stars.forEach((star) => {
        const size = Math.random() * 2 + 0.5;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 10 + 5;

        (star as HTMLDivElement).style.width = `${size}px`;
        (star as HTMLDivElement).style.height = `${size}px`;
        (star as HTMLDivElement).style.left = `${x}%`;
        (star as HTMLDivElement).style.top = `${y}%`;
        (star as HTMLDivElement).style.animation = `twinkle ${duration}s infinite`;
      });
    };

    const intervalId = setInterval(animateStars, 1000); // Update stars every second

    return () => clearInterval(intervalId); // Cleanup interval on unmount
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
            transform: `translate(-50%, -50%)`,
            animation: `twinkle ${star.duration}s infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default StarsBackground;


