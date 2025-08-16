import React, { useState, useEffect } from "react";
import "./Intro.css";
import bg from "../../../assets/Dilshan_Crop.png";
import hireme from "../../../assets/hireme.png";
import { Link } from "react-scroll";
import TextSwap from "../../Animations/SwapText";
import { useTheme } from "../../../context/ThemeContext";

const Intro = () => {
  const texts = ["Frontend Developer", "Full Stack Developer", "Cross-Platform Developer"];
  const { isDarkMode } = useTheme();
  const [counts, setCounts] = useState({ projects: 0, experience: 0, clients: 0 });
  const [skillPercentages, setSkillPercentages] = useState({
    react: 0,
    javascript: 0,
    nodejs: 0,
    css: 0
  });

  useEffect(() => {
    const targetCounts = { projects: 25, experience: 3, clients: 15 };
    const duration = 2000;
    const steps = 60;
    const stepValue = duration / steps;

    const timer = setInterval(() => {
      setCounts(prev => {
        const newCounts = {};
        let allComplete = true;
        
        Object.keys(targetCounts).forEach(key => {
          if (prev[key] < targetCounts[key]) {
            newCounts[key] = Math.min(prev[key] + Math.ceil(targetCounts[key] / steps), targetCounts[key]);
            allComplete = false;
          } else {
            newCounts[key] = prev[key];
          }
        });
        
        if (allComplete) {
          clearInterval(timer);
        }
        
        return newCounts;
      });
    }, stepValue);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const targetSkills = { react: 90, javascript: 85, nodejs: 80, css: 95 };
    const duration = 1500;
    const steps = 50;
    const stepValue = duration / steps;

    const timer = setInterval(() => {
      setSkillPercentages(prev => {
        const newSkills = {};
        let allComplete = true;
        
        Object.keys(targetSkills).forEach(key => {
          if (prev[key] < targetSkills[key]) {
            newSkills[key] = Math.min(prev[key] + Math.ceil(targetSkills[key] / steps), targetSkills[key]);
            allComplete = false;
          } else {
            newSkills[key] = prev[key];
          }
        });
        
        if (allComplete) {
          clearInterval(timer);
        }
        
        return newSkills;
      });
    }, stepValue);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section id="intro" className={isDarkMode ? 'dark-theme' : 'light-theme'}>
        <div className="introContent">
          <span className="hello">Hello,</span>
          <span className="introText">
            I'm <span className="introName"> Dilshan</span> <br />{" "}
            <TextSwap texts={texts} interval={3000} />
          </span>
          <p className="introPara">
            I'm a web and mobile app developer with a knack for creating sleek,
            user-friendly digital experiences.I specialize in building responsive
            websites and innovative apps that combine functionality with great
            design. Let's create something extraordinary together!
          </p>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <button className={`btn ${isDarkMode ? 'dark-btn' : 'light-btn'}`}>
              {" "}
              <img src={hireme} alt="hire me" className="hire" /> Hire me
            </button>
          </Link>
        </div>
        <img src={bg} alt="Profile" className="bg" />
      </section>
      
      {/* Stats Section */}
      <section className={`stats-section ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">{counts.projects}+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{counts.experience}+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{counts.clients}+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className={`skills-preview ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
        <div className="skills-container">
          <div className="skills-header">
            <h2>Technical Expertise</h2>
            <p>Here are some of the technologies I work with</p>
          </div>
          <div className="skills-grid">
            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">React.js</span>
                <span className="skill-percentage">{skillPercentages.react}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skillPercentages.react}%` }}
                ></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">JavaScript</span>
                <span className="skill-percentage">{skillPercentages.javascript}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skillPercentages.javascript}%` }}
                ></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">Node.js</span>
                <span className="skill-percentage">{skillPercentages.nodejs}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skillPercentages.nodejs}%` }}
                ></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">CSS/SCSS</span>
                <span className="skill-percentage">{skillPercentages.css}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skillPercentages.css}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
