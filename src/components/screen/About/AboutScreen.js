import React from "react";
import "./About.css";
import { useTheme } from "../../../context/ThemeContext";
import UIDesign from "../../../assets/ui-design.png";
import WebDesign from "../../../assets/website-design.png";
import AppDesign from "../../../assets/app-design.png";

function AboutScreen() {
  const { isDarkMode } = useTheme();

  return (
    <section id="about" className={isDarkMode ? "dark-theme" : "light-theme"}>
      <span className="aboutTitle">What I do</span>
      <span className="skillDescription">
        I design and develop modern web and mobile applications that are fast,
        reliable, and user-friendly. Using technologies like React, Next.js,
        React Native, and Flutter, I build cross-platform solutions that work
        seamlessly across devices. With experience in both frontend and backend
        development, I can deliver complete end-to-end products. I also focus on
        UI/UX design, creating clean and intuitive interfaces that give users
        the best possible experience.{" "}
        <div className="skillBars">
          <div className="skillBar">
            <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Web Application Development</h2>
              <p>
                I develop web applications using React, Next.js, Node.js, and Spring
                Boot, delivering robust and scalable solutions with a focus on
                performance and user experience.
              </p>
            </div>
          </div>
          <div className="skillBar">
            <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Mobile Application Development</h2>
              <p>
                I develop cross-platform mobile applications using React Native
                and Flutter, creating efficient and user-friendly experiences on
                both iOS and Android.
              </p>
            </div>
          </div>
          <div className="skillBar">
            <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Backend Development</h2>
              <p>
                I have experience in backend development, using Node.js, Spring
                Boot, Java, and MySQL, Firebase, and MongoDB to create robust
                and scalable solutions.
              </p>
            </div>
          </div>
        </div>
      </span>
    </section>
  );
}

export default AboutScreen;
