import React from "react";
import "./projects.css";

const Projects = () => {
  const projectList = [
    {
      title: "Full-Stack To-Do List Application",
      description:
        "Developed the backend for a full-stack To-Do List application, enabling users to add, edit, and delete tasks seamlessly. Built the server with Node.js and Express, integrated a MySQL database for reliable data persistence, and implemented RESTful APIs for smooth communication with the frontend. The frontend template was sourced externally and integrated for a clean, responsive user interface.",
      tech: "Node.js, Express.js, MySQL (Backend), HTML, CSS, JavaScript (Integrated Frontend Template)",
      github: "https://github.com/imlutherrrr/To-do",
    },
    // You can easily add more projects here
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="project-container">
        {projectList.map((project, index) => (
          <div
            className="project-card"
            key={index}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="project-details">
              <h1>{project.title}</h1>
              <p>{project.description}</p>
              <p>
                <strong>Tech Stack:</strong> {project.tech}
              </p>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
