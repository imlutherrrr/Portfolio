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
          entry.target.classList.remove('animate');
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
        <div className="about-content" ref={aboutRef}>
          <h2>About Me</h2>
          <p>
            I’m Luther Karuparthi, a Backend Developer specializing in Node.js, Express.js, and MySQL. I build clean, scalable APIs and efficient database solutions, with additional skills in HTML, CSS, and JavaScript. Recently graduated with a B.Tech, I focus on creating practical, high-quality projects and am eager to contribute to innovative development teams.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
