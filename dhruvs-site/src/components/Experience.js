import React from "react";
import "../styles/Experience.css";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Tech Company",
      period: "2022 - Present",
      description:
        "Led development of multiple web applications using React and Node.js. Implemented CI/CD pipelines and improved application performance by 40%.",
      skills: ["React", "Node.js", "AWS", "Docker"],
    },
    {
      title: "Frontend Developer",
      company: "Startup Inc",
      period: "2020 - 2022",
      description:
        "Developed and maintained responsive web applications. Collaborated with design team to implement pixel-perfect UIs.",
      skills: ["JavaScript", "HTML/CSS", "React", "Redux"],
    },
    {
      title: "Junior Developer",
      company: "Digital Agency",
      period: "2019 - 2020",
      description:
        "Worked on various client projects, focusing on frontend development and user experience improvements.",
      skills: ["HTML/CSS", "JavaScript", "jQuery", "Bootstrap"],
    },
  ];

  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="job-title">{exp.title}</h3>
                  <span className="company">{exp.company}</span>
                  <span className="period">{exp.period}</span>
                </div>
                <p className="description">{exp.description}</p>
                <div className="skills">
                  {exp.skills.map((skill, skillIndex) => (
                    <span className="skill-tag" key={skillIndex}>
                      {skill}
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

export default Experience;
