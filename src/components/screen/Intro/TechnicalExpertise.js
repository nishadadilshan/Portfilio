import React, { useState, useEffect } from "react";
import "./TechnicalExpertise.css";
import { useTheme } from "../../../context/ThemeContext";

const TechnicalExpertise = () => {
  const { isDarkMode } = useTheme();
  const [counts, setCounts] = useState({ projects: 0, experience: 0, clients: 0 });
  const [skillPercentages, setSkillPercentages] = useState({
    react: 0,
    javascript: 0,
    nodejs: 0,
    css: 0
  });

  useEffect(() => {
    const targetCounts = { projects: 25, experience: 5, clients: 6 };
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
    <section className={`technical-expertise-section ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      <div className="expertise-container">
        {/* Stats Section */}
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

        {/* Skills Preview Section */}
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
      </div>
    </section>
  );
};

export default TechnicalExpertise;
