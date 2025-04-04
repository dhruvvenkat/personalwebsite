import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="gradient-text">Hello, I'm</span>
            <br />
            <span className="name">Dhruv Venkat</span>
          </h1>
          <p className="hero-subtitle">
            Computer Engineering Student @ University of Waterloo
            <br />
            <span className="highlight">
              Currently seeking Fall 2025 internships
            </span>
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="cta-button">
              Get in Touch
            </a>
            <a
              href="/resume.pdf"
              className="secondary-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="geometric-shape"></div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
