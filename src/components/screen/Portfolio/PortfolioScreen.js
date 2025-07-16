import React, { useState, useEffect } from "react";
import "./Portfolio.css";

import Img1 from "../../../assets/img1.jpg";
import Img2 from "../../../assets/img2.jpg";
import Img3 from "../../../assets/img3.jpg";
import Img4 from "../../../assets/img4.jpg";
import Img5 from "../../../assets/img5.jpg";
import Img6 from "../../../assets/img6.jpg";
import Img7 from "../../../assets/img7.PNG";
import Img8 from "../../../assets/img8.PNG";
import Img9 from "../../../assets/img9.jpg";
import Img10 from "../../../assets/img10.jpg";
import { Alert } from "@mui/material";

function PortfolioScreen() {
  const [showMore, setShowMore] = useState(false);
  const [animateImages, setAnimateImages] = useState(false);

  const initialImages = [
    { src: Img7, alt: "Img7" },
    { src: Img1, alt: "Img1" },
    { src: Img2, alt: "Img2" },
    { src: Img3, alt: "Img3" },
    { src: Img5, alt: "Img5" },
    { src: Img6, alt: "Img6" },
  ];

  const additionalImages = [
    { src: Img4, alt: "Img4" },
    { src: Img8, alt: "Img8" },
    { src: Img9, alt: "Img9" },
    { src: Img10, alt: "Img10" },
  ];

  const displayedImages = showMore 
    ? [...initialImages, ...additionalImages]
    : initialImages;

  const handleSeeMore = () => {
    if (!showMore) {
      setShowMore(true);
      // Trigger animation for new images after a short delay
      setTimeout(() => {
        setAnimateImages(true);
      }, 100);
    } else {
      setShowMore(false);
      setAnimateImages(false);
    }
  };

  return (
    <section id="works">
      <span className="worksTitle">My Portfolio</span>
      <span className="worksDes">
        I take pride in my meticulous attention to detail and ensuring that
        every aspect of my work is pixel-perfect. I'm excited to leverage my
        skills and experience to help businesses achieve their goals and
        establish a robust online presence.
      </span>
      <div className="workImgs">
        {displayedImages.map((image, index) => (
          <img 
            key={index}
            src={image.src} 
            alt={image.alt} 
            className={`workImg ${showMore && index >= initialImages.length && animateImages ? 'animate-in' : ''}`}
            style={{
              animationDelay: showMore && index >= initialImages.length ? `${(index - initialImages.length) * 0.1}s` : '0s'
            }}
          />
        ))}
      </div>
      <button className="seeMore" onClick={handleSeeMore}>
        {showMore ? "See less" : "See more"}
      </button>
    </section>
  );
}

export default PortfolioScreen;
