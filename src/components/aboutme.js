// src/components/About.js

import React, { useEffect, useRef } from 'react';
import './aboutme.css';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate'); // Remove to allow re-animating
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-photo">
          <img
            src={require('../images/IMG20250203202144.jpg')}
            alt="Luther Karuparthi"
            className="about-image"
          />
        </div>
        <div className="about-content" ref={aboutRef}>
          <h2>About Me</h2>
          <p>
            Hi, I'm Luther Karuparthi, a passionate web developer who loves turning ideas into interactive and functional web experiences. I enjoy working on both the frontend and backend, building applications that are not only visually appealing but also optimized and scalable.

            I'm constantly exploring new technologies, improving my skills, and building projects that help me grow as a developer. I believe in clean code, creative problem-solving, and learning by doing.

            Currently, I’m looking for an opportunity to join a dynamic team where I can contribute, learn, and take on real-world challenges.          
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
