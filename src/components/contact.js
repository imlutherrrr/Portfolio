import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-intro">Feel free to reach out through any of the platforms below!</p>
      
      <div className="contact-links">
        <a href="mailto:connectluther@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="icon" /> connectluther@gmail.com
        </a>
        <a href="https://github.com/imlutherrrr" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" /> github.com/imlutherrrr
        </a>
        <a href="https://linkedin.com/in/karuparthi-luther" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" /> linkedin.com/in/karuparthi-luther
        </a>
      </div>
    </section>
  );
};

export default Contact;
