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
            <span className="name">Dhruv</span>
          </h1>
          <p className="hero-subtitle">
            A passionate developer creating digital experiences
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="cta-button">
              Get in Touch
            </a>
            <a href="#" className="secondary-button">
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
