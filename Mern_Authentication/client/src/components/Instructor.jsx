import React from "react";
import "../styles/Instructor.css";
import instructorImage from "../assets/profile.jpg";
// instructions
const Instructor = () => {
  return (
    <div className="instructor-page">
      <div className="instructor-card">
        <div className="instructor-image">
          <img src={instructorImage} alt="Instructor" />
        </div>
        <div className="instructor-info">
          <h1>Adaveni Surya Teja</h1>
          <p>
            Hello! I'm Adaveni Surya Teja, a passionate MERN stack developer
            with a love for studying and building scalable, robust applications.
            With JavaScript, React, Node.js, Express, and
            MongoDB.
          </p>
          <div className="social-links">
            <a
              href="https://github.com/SuryatejaAdaveni"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/adaveni-suryateja-851793317"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
