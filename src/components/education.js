import React from "react";
import "./education.css";
import collegeLogo from '../images/college-logo.png';
import stateLogo from '../images/state-logo.png';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2 className="section-title">Education</h2>
      <div className="edu-horizontal">
        <div className="edu-box">
          <img src={collegeLogo} alt="College" />
          <h4>B.Tech - Mechanical</h4>
          <p>RGUKT Ongole</p>
          <span>2020 - 2024</span>
          <p className="grade">CGPA: 7.6</p>
        </div>

        <div className="edu-box">
          <img src={collegeLogo} alt="PUC" />
          <h4>PUC - MPC</h4>
          <p>RGUKT Ongole</p>
          <span>2018 - 2020</span>
          <p className="grade">CGPA: 7.2</p>
        </div>

        <div className="edu-box">
          <img src={stateLogo} alt="School" />
          <h4>SSC</h4>
          <p>Z.P High School, Mallavolu</p>
          <span>2017 - 2018</span>
          <p className="grade">CGPA: 9.8</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
