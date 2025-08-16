import React, { useState, useRef, useEffect } from "react";
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
import Img11 from "../../../assets/img13.jpg";
import Img12 from "../../../assets/img14.jpg";
import Portfolio1 from "../../../assets/img11.PNG";
import Portfolio2 from "../../../assets/img12.PNG";

function PortfolioScreen() {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [currentIndex3, setCurrentIndex3] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Split images into three rows
  const row1Images = [
    { src: Img7, alt: "Img7" },
    { src: Img1, alt: "Img1" },
    { src: Img2, alt: "Img2" },
    { src: Img3, alt: "Img3" },
    { src: Img5, alt: "Img5" },
    { src: Img6, alt: "Img6" },
    { src: Img4, alt: "Img4" },
  ];

  const row2Images = [
    { src: Img8, alt: "Img8" },
    { src: Img9, alt: "Img9" },
    { src: Img10, alt: "Img10" },
    { src: Img11, alt: "Img11" },
    { src: Img12, alt: "Img12" },
  ];

  const row3Images = [
    { src: Portfolio1, alt: "Portfolio 1", isLandscape: true },
    { src: Portfolio2, alt: "Portfolio 2", isLandscape: true },
  ];

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollRow = (rowRef, direction) => {
    if (rowRef.current) {
      const scrollAmount = 300; // Adjust scroll amount as needed
      const currentScroll = rowRef.current.scrollLeft;
      const newScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      rowRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  const nextImage = (currentIndex, setCurrentIndex, imagesLength) => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesLength);
  };

  const prevImage = (currentIndex, setCurrentIndex, imagesLength) => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imagesLength) % imagesLength);
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
      
      {/* First Row - Horizontal Scrolling on Desktop, Carousel on Mobile */}
      <div className="portfolio-row-container">
        <button 
          className="scroll-arrow left-arrow" 
          onClick={() => isMobile 
            ? prevImage(currentIndex1, setCurrentIndex1, row1Images.length)
            : scrollRow(row1Ref, 'left')
          }
          aria-label={isMobile ? "Previous image" : "Scroll left"}
        >
          ‹
        </button>
        
        <div className="portfolio-row" ref={row1Ref}>
          {isMobile ? (
            <div className="portfolio-item">
              <img 
                src={row1Images[currentIndex1].src} 
                alt={row1Images[currentIndex1].alt} 
                className={`workImg ${row1Images[currentIndex1].isLandscape ? 'landscape' : ''}`}
              />
            </div>
          ) : (
            row1Images.map((image, index) => (
              <div key={index} className="portfolio-item">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className={`workImg ${image.isLandscape ? 'landscape' : ''}`}
                />
              </div>
            ))
          )}
        </div>
        
        <button 
          className="scroll-arrow right-arrow" 
          onClick={() => isMobile 
            ? nextImage(currentIndex1, setCurrentIndex1, row1Images.length)
            : scrollRow(row1Ref, 'right')
          }
          aria-label={isMobile ? "Next image" : "Scroll right"}
        >
          ›
        </button>
      </div>

      {/* Second Row - Horizontal Scrolling on Desktop, Carousel on Mobile */}
      <div className="portfolio-row-container">
        <button 
          className="scroll-arrow left-arrow" 
          onClick={() => isMobile 
            ? prevImage(currentIndex2, setCurrentIndex2, row2Images.length)
            : scrollRow(row2Ref, 'left')
          }
          aria-label={isMobile ? "Previous image" : "Scroll left"}
        >
          ‹
        </button>
        
        <div className="portfolio-row" ref={row2Ref}>
          {isMobile ? (
            <div className="portfolio-item">
              <img 
                src={row2Images[currentIndex2].src} 
                alt={row2Images[currentIndex2].alt} 
                className={`workImg ${row2Images[currentIndex2].isLandscape ? 'landscape' : ''}`}
              />
            </div>
          ) : (
            row2Images.map((image, index) => (
              <div key={index} className="portfolio-item">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className={`workImg ${image.isLandscape ? 'landscape' : ''}`}
                />
              </div>
            ))
          )}
        </div>
        
        <button 
          className="scroll-arrow right-arrow" 
          onClick={() => isMobile 
            ? nextImage(currentIndex2, setCurrentIndex2, row2Images.length)
            : scrollRow(row2Ref, 'right')
          }
          aria-label={isMobile ? "Next image" : "Scroll right"}
        >
          ›
        </button>
      </div>

      {/* Third Row - Single Image Carousel */}
      <div className="portfolio-row-container carousel-container">
        <button 
          className="scroll-arrow left-arrow" 
          onClick={() => prevImage(currentIndex3, setCurrentIndex3, row3Images.length)}
          aria-label="Previous image"
        >
          ‹
        </button>
        
        <div className="portfolio-row carousel-row">
          <div className="portfolio-item">
            <img 
              src={row3Images[currentIndex3].src} 
              alt={row3Images[currentIndex3].alt} 
              className={`workImg ${row3Images[currentIndex3].isLandscape ? 'landscape' : ''}`}
            />
          </div>
        </div>
        
        <button 
          className="scroll-arrow right-arrow" 
          onClick={() => nextImage(currentIndex3, setCurrentIndex3, row3Images.length)}
          aria-label="Next image"
        >
          ›
        </button>
      </div>
    </section>
  );
}

export default PortfolioScreen;
