import React from "react";
import "./Footer-top.css";
import { Link } from "react-router-dom";

const FooterTop = () => {
  return (
    <section className="footer-top">
      <div className="footer-content">
        <div className="box">
          <h2>
            Sobre <span>Web/Code/Camp</span>
          </h2>
          <p>
            Normally, both your asses would be dead as fucking fried chicken,
            but you happen to pull this shit while I'm in a transitional period
            so I don't wanna kill you, I wanna help you. But I can't give you
            this case, it don't belong to me. Besides, I've already been through
            too much shit this morning over this case to hand it over to your
            dumb ass.
          </p>
        </div>
        <div className="box">
          <h2>
            Preguntas <span>Frecuentes</span>
          </h2>
          <p>
            Normally, both your asses would be dead as fucking fried chicken,
            but you happen to pull this shit while I'm in a transitional period
            so I don't wanna kill you, I wanna help you. But I can't give you
            this case, it don't belong to me. Besides, I've already been through
            too much shit this morning over this case to hand it over to your
            dumb ass.
          </p>
        </div>
        <nav className="footer-socia-media-nav">
          <Link to="#" target="_blank">
            <i className="fab fa-facebook-square"></i>
          </Link>
          <Link to="#" target="_blank">
            <i className="fab fa-twitter-square"></i>
          </Link>
          <Link to="#" target="_blank">
            <i className="fab fa-youtube-square"></i>
          </Link>
          <Link to="#" target="_blank">
            <i className="fab fa-instagram"></i>
          </Link>
          <Link to="#" target="_blank">
            <i className="fab fa-pinterest-square"></i>
          </Link>
        </nav>
      </div>
    </section>
  );
};

export default FooterTop;
