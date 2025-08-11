import React from 'react';
import './skills.css';
import {
  FaHtml5, FaCss3Alt, FaJs, FaPython, FaGitAlt, FaGithub
} from 'react-icons/fa';
import { SiMysql, SiNodedotjs, SiExpress } from 'react-icons/si';

const skills = [
  { name: 'Python', icon: <FaPython className="skill-icon" style={{ color: '#3776AB' }} /> },
  { name: 'JavaScript', icon: <FaJs className="skill-icon" style={{ color: '#f0db4f' }} /> },
  { name: 'Node.js', icon: <SiNodedotjs className="skill-icon" style={{ color: '#68A063' }} /> },
  { name: 'Express.js', icon: <SiExpress className="skill-icon" style={{ color: '#333' }} /> },
  { name: 'MySQL', icon: <SiMysql className="skill-icon" style={{ color: '#00758F' }} /> },
  { name: 'HTML', icon: <FaHtml5 className="skill-icon" style={{ color: '#E44D26' }} /> },
  { name: 'CSS', icon: <FaCss3Alt className="skill-icon" style={{ color: '#264de4' }} /> },
  { name: 'Git', icon: <FaGitAlt className="skill-icon" style={{ color: '#f1502f' }} /> },
  { name: 'GitHub', icon: <FaGithub className="skill-icon" style={{ color: '#333' }} /> },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">My Skills</h2>
        <div className="skills-scroll-wrapper">
          <div className="skills-scroll">
            {[...skills, ...skills].map((skill, index) => (
              <div className="skill-card" key={index}>
                {skill.icon}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
