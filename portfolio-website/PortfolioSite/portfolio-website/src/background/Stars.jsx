import React, { useMemo } from "react";

const Stars = () => {
  const numStars = 250;

  const stars = useMemo(() => {
    return Array.from({ length: numStars }, (_, i) => {
      const size = Math.random() * 2 + 1; 
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const delay = Math.random() * 5;

      return (
        <span key={i} className="absolute rounded-full bg-[#ebf8a4] opacity-70 twinkle" style={{ width: `${size}px`, height: `${size}px`, top: `${top}%`, left: `${left}%`, animationDelay: `${delay}s`, }}/>
      );
    });
  }, []); 

  return (
    <>
      <style>
        {`
          @keyframes twinkle {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 1; }
          }

          .twinkle {
            animation: twinkle 2s infinite ease-in-out;
          }
        `}
      </style>
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none"> { stars } </div>
    </>
  );
};

export default Stars;