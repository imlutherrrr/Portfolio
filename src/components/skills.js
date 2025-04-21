// src/components/Skills.js

import React, { useEffect, useRef, useState } from 'react';
import './skills.css';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact,
  FaGitAlt, FaGithub, FaBootstrap,
} from 'react-icons/fa';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="skill-icon" style={{ color: '#E44D26' }} /> },
  { name: 'CSS', icon: <FaCss3Alt className="skill-icon" style={{ color: '#264de4' }} /> },
  { name: 'JavaScript', icon: <FaJs className="skill-icon" style={{ color: '#f0db4f' }} /> },
  { name: 'Bootstrap', icon: <FaBootstrap className="skill-icon" style={{ color: '#7952B3' }} /> },
  { name: 'React', icon: <FaReact className="skill-icon" style={{ color: '#61DBFB' }} /> },
  { name: 'Git', icon: <FaGitAlt className="skill-icon" style={{ color: '#f1502f' }} /> },
  { name: 'GitHub', icon: <FaGithub className="skill-icon" style={{ color: '#333' }} /> },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          setInView(entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="skills"
      className={`skills-section ${inView ? 'animate-skills' : ''}`}
      ref={sectionRef}
    >
      <div className="skills-container">
        <h2 className="skills-title">My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationPlayState: inView ? 'running' : 'paused',
              }}
            >
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
