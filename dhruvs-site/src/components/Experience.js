import React from "react";
import "../styles/Experience.css";

const Experience = () => {
  const experiences = [
    {
      title: "Platform Engineering (DevOps) Intern",
      company: "Tangerine Bank",
      period: "Jan. 2025 - Present",
      description:
        "Developed Python scripts to scan hundreds of GitHub repositories for vulnerabilities, supporting 100+ staff members. Tested and troubleshot code from end-to-end using both single- and multi-branch Jenkins pipelines. Created an institution-wide license management system for GitHub Copilot to monitor and optimize monthly expenses based on developer usage.",
      skills: ["Python", "Jenkins", "GitHub", "DevOps"],
    },
    {
      title: "Coding Instructor",
      company: "Sensei",
      period: "Jan. - Aug. 2024",
      description:
        "Worked with over 50 children from ages 5-15 to teach basic concepts related to Lua, JavaScript, and C#. Collaborated with other employees to implement an in-house currency system for students to be rewarded for their learning progression. Utilized sales skills to 'pitch' the program to prospective customers and helped bring in over 20 new students.",
      skills: ["Teaching", "Lua", "JavaScript", "C#"],
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
