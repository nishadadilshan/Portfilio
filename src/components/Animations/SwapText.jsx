import React, { useState, useEffect } from "react";
import "./TextSwap.css";

const TextSwap = ({ texts, interval = 3000 }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const swapText = setInterval(() => {
      setFade(false); // Start fade-out
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setFade(true); // Start fade-in
      }, 500); // Sync with the duration of fade-out
    }, interval);

    return () => clearInterval(swapText);
  }, [texts.length, interval]);

  return (
    <div className={`text-swap ${fade ? "fade-in" : "fade-out"}`}>
      {texts[currentTextIndex]}
    </div>
  );
};

export default TextSwap;
