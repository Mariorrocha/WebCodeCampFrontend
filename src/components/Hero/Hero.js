import React from "react";
import "./Hero.css";
import { HashLink as Link } from "react-router-hash-link";

const Hero = () => {
  return (
    
    <div id="hero">
      <div className="bg-hero"></div>
      <div className="hero-content">
        <nav className="main-social-media-nav">
          <Link to="/" target="_blank">
            <i className="fab fa-facebook-square"></i>
          </Link>
          <Link to="/" target="_blank">
            <i className="fab fa-twitter-square"></i>
          </Link>
          <Link to="/" target="_blank">
            <i className="fab fa-youtube-square"></i>
          </Link>
          <Link to="/" target="_blank">
            <i className="fab fa-instagram"></i>
          </Link>
          <Link to="/" target="_blank">
            <i className="fab fa-pinterest-square"></i>
          </Link>
        </nav>
        <h1 className="event-name">Web/Code/Camp</h1>
        <p className="slogan">
          Las mejores conferencias de diseño web en México
        </p>
        <div className="scroll-down-arrow">
          <Link to="#event-presentation">
            <i className="fas fa-chevron-down"></i>
          </Link>
        </div>
      </div>
    </div>
    
  );
};

export default Hero;
