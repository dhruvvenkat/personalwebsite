import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              I'm a passionate developer with a keen interest in creating
              innovative digital solutions. My journey in technology began with
              a curiosity for how things work, and it has evolved into a deep
              love for building meaningful applications that make a difference.
            </p>
            <div className="skills">
              <h3>Skills</h3>
              <div className="skills-grid">
                <div className="skill-card">
                  <h4>Frontend</h4>
                  <ul>
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>HTML/CSS</li>
                    <li>Tailwind</li>
                  </ul>
                </div>
                <div className="skill-card">
                  <h4>Backend</h4>
                  <ul>
                    <li>Node.js</li>
                    <li>Python</li>
                    <li>SQL</li>
                    <li>REST APIs</li>
                  </ul>
                </div>
                <div className="skill-card">
                  <h4>Tools</h4>
                  <ul>
                    <li>Git</li>
                    <li>VS Code</li>
                    <li>Figma</li>
                    <li>Docker</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-container">
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
