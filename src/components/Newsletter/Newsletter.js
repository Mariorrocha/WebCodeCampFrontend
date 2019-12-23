import React from "react";
import "./Newsletter.css";
import { Link } from "react-router-dom";

const Newsletter = () => {
  return (
    <section id="newsletter">
      <div className="newsletter">
        <div className="bg-newsletter"></div>
        <div className="newsletter-content">
          <p>Regístrate al boletín del</p>
          <h2>Web/Code/Camp</h2>
          <Link to="#">Registro</Link>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
