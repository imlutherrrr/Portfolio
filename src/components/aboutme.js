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
            Hi, I'm Luther Karuparthi, an aspiring Backend Developer with a strong interest in building clean, scalable, and efficient web applications. I specialize in Python, Flask, and MySQL, and I enjoy working behind the scenes to create smooth and responsive user experiences. I recently completed my B.Tech and have been actively building personal projects to strengthen my backend development skills. I'm eager to join a dynamic team where I can contribute, learn, and grow as a developer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
