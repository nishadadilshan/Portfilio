import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { useTheme } from "../../../context/ThemeContext";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
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
  const [isMobile, setIsMobile] = useState(false);
  const { isDarkMode } = useTheme();

  // Portfolio data with topics
  const portfolioData = {
    row1: {
      topic: "Web Development Projects",
      description: "Real-world mobile solutions from my corporate experience",
      images: [
        { src: Img7, alt: "Web Project 1" },
        { src: Img1, alt: "Web Project 2" },
        { src: Img2, alt: "Web Project 3" },
        { src: Img3, alt: "Web Project 4" },
        { src: Img5, alt: "Web Project 5" },
        { src: Img6, alt: "Web Project 6" },
        { src: Img4, alt: "Web Project 7" },
      ]
    },
    row2: {
      topic: "Mobile App Development",
      description: "Personal mobile applications I've developed",
      images: [
        { src: Img8, alt: "Mobile App 1" },
        { src: Img9, alt: "Mobile App 2" },
        { src: Img10, alt: "Mobile App 3" },
        { src: Img11, alt: "Mobile App 4" },
        { src: Img12, alt: "Mobile App 5" },
      ]
    },
    row3: {
      topic: "Featured Projects",
      description: "Real-world web applications from my professional experience",
      images: [
        { src: Portfolio1, alt: "Featured Project 1", isLandscape: true },
        { src: Portfolio2, alt: "Featured Project 2", isLandscape: true },
      ]
    }
  };

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Swiper configuration for desktop (horizontal scrolling)
  const desktopSwiperConfig = {
    modules: [Navigation, Pagination, Autoplay],
    spaceBetween: 20,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    }
  };

  // Swiper configuration for mobile (single slide)
  const mobileSwiperConfig = {
    modules: [Navigation, Pagination, Autoplay, EffectFade],
    spaceBetween: 0,
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      clickable: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  };

  // Swiper configuration for landscape images (single slide)
  const landscapeSwiperConfig = {
    modules: [Navigation, Pagination, Autoplay, EffectFade],
    spaceBetween: 0,
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  };

  return (
    <section id="works" className={isDarkMode ? "dark-theme" : "light-theme"}>
      <span className="worksTitle">My Portfolio</span>
      <span className="worksDes">
        I take pride in my meticulous attention to detail and ensuring that
        every aspect of my work is pixel-perfect. I'm excited to leverage my
        skills and experience to help businesses achieve their goals and
        establish a robust online presence.
      </span>
      
      {/* First Row - Web Development */}
      <div className="portfolio-section">
        <div className="portfolio-topic">
          <p className="topic-description">{portfolioData.row1.description}</p>
        </div>
        <div className="portfolio-row-container">
          <div className="swiper-button-prev"></div>
          <Swiper 
            {...(isMobile ? mobileSwiperConfig : desktopSwiperConfig)}
            className="portfolio-swiper"
          >
            {portfolioData.row1.images.map((image, index) => (
              <SwiperSlide key={index} className="portfolio-slide">
                <div className="portfolio-item">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className={`workImg ${image.isLandscape ? 'landscape' : ''}`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-next"></div>
        </div>
      </div>

      {/* Second Row - Mobile Development */}
      <div className="portfolio-section">
        <div className="portfolio-topic">
          <p className="topic-description">{portfolioData.row2.description}</p>
        </div>
        <div className="portfolio-row-container">
          <div className="swiper-button-prev"></div>
          <Swiper 
            {...(isMobile ? mobileSwiperConfig : desktopSwiperConfig)}
            className="portfolio-swiper"
          >
            {portfolioData.row2.images.map((image, index) => (
              <SwiperSlide key={index} className="portfolio-slide">
                <div className="portfolio-item">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className={`workImg ${image.isLandscape ? 'landscape' : ''}`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-next"></div>
        </div>
      </div>

      {/* Third Row - Featured Projects */}
      <div className="portfolio-section">
        <div className="portfolio-topic">
          <p className="topic-description">{portfolioData.row3.description}</p>
        </div>
        <div className="portfolio-row-container carousel-container">
          <div className="swiper-button-prev"></div>
          <Swiper 
            {...landscapeSwiperConfig}
            className="portfolio-swiper landscape-swiper"
          >
            {portfolioData.row3.images.map((image, index) => (
              <SwiperSlide key={index} className="portfolio-slide">
                <div className="portfolio-item">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className={`workImg ${image.isLandscape ? 'landscape' : ''}`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioScreen;
