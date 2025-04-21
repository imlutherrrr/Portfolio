import React from "react";
import "./projects.css";
import desktopImg from "../images/myportfolio.png"; // Desktop image path
import mobileImg from "../images/myportfolioM.png"; // Mobile image path

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="project-container">
        <div className="project-card responsive-showcase">
          <div className="device-mockups">
            {/* Desktop View */}
            <div className="device">
              <img src={desktopImg} alt="Portfolio Desktop View" className="project-img1" />
              <p className="view-label">Desktop View</p>
            </div>

            {/* Mobile View */}
            <div className="device">
              <img src={mobileImg} alt="Portfolio Mobile View" className="project-img" />
              <p className="view-label">Mobile View</p>
            </div>
          </div>

          <div className="project-details">
            <h3>Responsive Personal Portfolio Website</h3>
            <p>Designed and developed a fully responsive personal portfolio website using React.js to showcase my professional profile, skills, and projects. The site is optimized for both desktop and mobile views, providing a seamless user experience across all devices. The layout is minimalistic and professional, with a clean interface and smooth transitions.

It includes sections like About, Projects, and Contact, with clickable links to GitHub, LinkedIn, and live project demos. Built with a mobile-first approach using custom CSS and media queries for device adaptability.</p>
            <p><strong>Tech Stack:</strong> React.js, CSS, JSX</p>
            <div className="project-links">
              <a href="https://imlutherrrr.vercel.app" target="_blank" rel="noreferrer">Live Demo</a>
              <a href="https://github.com/imlutherrrr/Portfolio" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
