import React, { useState, useEffect } from "react";
import "./TechnicalExpertise.css";
import { useTheme } from "../../../context/ThemeContext";

const TechnicalExpertise = () => {
  const { isDarkMode } = useTheme();
  const [counts, setCounts] = useState({ projects: 0, experience: 0, clients: 0 });
  const [skillPercentages, setSkillPercentages] = useState({
    react: 0,
    reactNative: 0,
    typescript: 0,
    javascript: 0,
    nodejs: 0,
    java: 0,
    springBoot: 0,
    html: 0,
    css: 0,
    git: 0,
    firebase: 0,
    cicd: 0,
    agile: 0,
    cloud: 0,
    testing: 0
  });

  // Cursor following effect for stat items
  const handleMouseMove = (e) => {
    const statItem = e.currentTarget;
    const rect = statItem.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const afterElement = statItem.querySelector('::after') || statItem;
    if (afterElement) {
      afterElement.style.setProperty('--mouse-x', `${x}px`);
      afterElement.style.setProperty('--mouse-y', `${y}px`);
    }
  };

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
    const targetSkills = { 
      react: 80, 
      reactNative: 80, 
      typescript: 85, 
      javascript: 85, 
      nodejs: 75, 
      java: 60, 
      springBoot: 60, 
      html: 85, 
      css: 80, 
      git: 80, 
      firebase: 75,
      cicd: 60,
      agile: 75,
      cloud: 70,
      testing: 75
    };
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
          <div className="stat-item" onMouseMove={handleMouseMove}>
            <div className="stat-number">{counts.projects}+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item" onMouseMove={handleMouseMove}>
            <div className="stat-number">{counts.experience}+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item" onMouseMove={handleMouseMove}>
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
                <span className="skill-name">React Native</span>
                <span className="skill-percentage">{skillPercentages.reactNative}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skillPercentages.reactNative}%` }}
                ></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">TypeScript</span>
                <span className="skill-percentage">{skillPercentages.typescript}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skillPercentages.typescript}%` }}
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
                <span className="skill-name">Java</span>
                <span className="skill-percentage">{skillPercentages.java}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skillPercentages.java}%` }}
                ></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">Spring Boot</span>
                <span className="skill-percentage">{skillPercentages.springBoot}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skillPercentages.springBoot}%` }}
                ></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">HTML5</span>
                <span className="skill-percentage">{skillPercentages.html}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skillPercentages.html}%` }}
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
            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">Git/GitHub</span>
                <span className="skill-percentage">{skillPercentages.git}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skillPercentages.git}%` }}
                ></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">Firebase</span>
                <span className="skill-percentage">{skillPercentages.firebase}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skillPercentages.firebase}%` }}
                ></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">CI/CD</span>
                <span className="skill-percentage">{skillPercentages.cicd}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skillPercentages.cicd}%` }}
                ></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">Agile</span>
                <span className="skill-percentage">{skillPercentages.agile}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skillPercentages.agile}%` }}
                ></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">Cloud</span>
                <span className="skill-percentage">{skillPercentages.cloud}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skillPercentages.cloud}%` }}
                ></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-name">Testing</span>
                <span className="skill-percentage">{skillPercentages.testing}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skillPercentages.testing}%` }}
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
