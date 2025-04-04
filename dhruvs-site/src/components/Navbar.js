import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const navbarHeight = document.querySelector(".navbar").offsetHeight;
      const targetPosition = targetElement.offsetTop - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" onClick={handleClick} className="logo">
          <img src="/dvlogo.png" alt="DV Logo" />
        </a>
        <ul className="nav-links">
          <li>
            <a href="#about" onClick={handleClick}>
              About
            </a>
          </li>
          <li>
            <a href="#experience" onClick={handleClick}>
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" onClick={handleClick}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleClick}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
