// src/components/Home.js

import React, { useEffect, useState } from 'react';
import './home.css';
import myImage from '../images/Snapchat-1186437608.jpg';

const Home = () => {
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationDone(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="text-content">
          <h1>Hi, I'm <span className="highlight">Luther Karuparthi</span></h1>
          <div className={`typing-container ${animationDone ? 'done' : ''}`}>
            <span className="typing">Back-End Developer</span>
          </div>
          <p>I build clean, efficient, and scalable backend systems using Python, Flask, and MySQL.</p>
        </div>
        <div className="photo-content">
          <img src={myImage} alt="Luther Karuparthi" className="profile-photo" />
        </div>
      </div>
    </section>
  );
};

export default Home;
