import React from "react";
import "../styles/Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "EscrowShield",
      description:
        "Developed a proof-of-concept web application to hold down payments in escrow on the blockchain for buyers of new properties, eliminating the cost of third-party escrows and notaries. Learned and applied the Internet Computer blockchain to write self-validating smart contracts stored in ICP canisters.",
      image: "https://via.placeholder.com/400x250",
      technologies: ["ReactJS", "Internet Computer", "Motoko", "MetaMask API"],
      github: "https://github.com/dhruvvenkat/escrowshield",
      live: "#",
    },
    {
      title: "StockWatcher",
      description:
        "Developed a CRUD application using Java HTTP client to auto-update users' watchlists every 5 minutes. Users can add and remove stocks from their watchlist or export their watchlist as a CSV file. Used Java Swing to develop an intuitive API with buttons, headers, and graphics.",
      image: "https://via.placeholder.com/400x250",
      technologies: [
        "Java",
        "Java Swing/FX",
        "Java HTTP Client",
        "Finnhub API",
      ],
      github: "https://github.com/dhruvvenkat/stockwatcher",
      live: "#",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span className="tech-tag" key={techIndex}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
