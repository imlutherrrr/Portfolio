import React from "react";
import "./education.css";
import collegeLogo from '../images/college-logo.png';
import stateLogo from '../images/state-logo.png';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2 className="section-title">Education</h2>
      <div className="edu-container">
        <div className="edu-card">
          <div className="edu-main">
            <img src={collegeLogo} alt="College Logo" className="edu-logo" />
            <h3>B.Tech in Mechanical Engineering</h3>
          </div>
          <div className="edu-details">
            <p className="edu-place">Rajiv Gandhi University of Knowledge Technologies, Ongole</p>
            <p className="edu-year">2020 - 2024</p>
            <p className="edu-grade">CGPA: 7.6</p>
          </div>
        </div>

        <div className="edu-card">
          <div className="edu-main">
            <img src={collegeLogo} alt="College Logo" className="edu-logo" />
            <h3>Pre University Course (MPC)</h3>
          </div>
          <div className="edu-details">
            <p className="edu-place">Rajiv Gandhi University of Knowledge Technologies, Ongole</p>
            <p className="edu-year">2018 - 2020</p>
            <p className="edu-grade">CGPA: 7.2</p>
          </div>
        </div>

        <div className="edu-card">
          <div className="edu-main">
            <img src={stateLogo} alt="State Logo" className="edu-logo" />
            <h3>SSC</h3>
          </div>
          <div className="edu-details">
            <p className="edu-place">Z.P High School, Mallavolu</p>
            <p className="edu-year">2017 - 2018</p>
            <p className="edu-grade">CGPA: 9.8</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
