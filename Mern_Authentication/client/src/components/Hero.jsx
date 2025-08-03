import React, { useContext } from "react";
import "../styles/Hero.css";
import heroImage from "../assets/img1.png";
import { Context } from "../main";

const Hero = () => {
  const { user } = useContext(Context);
  return (
    <>
      <div className="hero-section">
        <img src={heroImage} alt="hero-image" />
        <h4>Hello, {user ? user.name : "Developer"}</h4>
        <h1> Welcome to my Authentication App</h1>
        <p>Built with React, Node.js, and MongoDB — experience smooth signup, OTP verification, and password management in action.
        </p>
      </div>
    </>
  );
};

export default Hero;
