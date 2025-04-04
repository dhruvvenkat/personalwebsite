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
              I'm a competent software developer with industry experience in
              C++, Python, Java, web development, and DevOps practices. As a
              team player, I excel at working with challenging projects under
              pressure, demonstrating strong communication and practiced
              leadership skills.
            </p>
            <div className="skills">
              <h3>Technical Proficiencies</h3>
              <div className="skills-grid">
                <div className="skill-card">
                  <h4>Languages</h4>
                  <ul>
                    <li>C/C++</li>
                    <li>Java</li>
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>HTML/CSS</li>
                    <li>SQL</li>
                  </ul>
                </div>
                <div className="skill-card">
                  <h4>Libraries & Frameworks</h4>
                  <ul>
                    <li>ReactJS</li>
                    <li>NextJS</li>
                    <li>Pandas</li>
                    <li>NumPy</li>
                    <li>Matplotlib</li>
                    <li>Scikit-learn</li>
                  </ul>
                </div>
                <div className="skill-card">
                  <h4>Tools & Technologies</h4>
                  <ul>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>Jenkins</li>
                    <li>MySQL</li>
                    <li>Jupyter Notebook</li>
                    <li>Figma</li>
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
