"use client";

import React from "react";

const StarsBackground = () => {
  
  const containerStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    zIndex: -1,
    overflow: "hidden",
    background: "black",
  };

  const starsStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "radial-gradient(white 1px, transparent 1px)",
    backgroundSize: "20px 20px",
    animation: "animateStars 100s linear infinite",
  };

  
  const keyframes = `
    @keyframes animateStars {
      from { transform: translateY(0); }
      to { transform: translateY(-100%); }
    }
  `;

  
  React.useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = keyframes;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div style={containerStyle}>
      <div style={starsStyle}></div>
    </div>
  );
};

export default StarsBackground;


