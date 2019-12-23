import React from "react";
import "./Prices.css";
import { Link } from "react-router-dom";

const Prices = () => {
  return (
    <section id="prices" className="prices">
      <div className="prices-content">
        <h2>Precios</h2>
        <div className="package-box">
          <h3>Pase por un día</h3>
          <span>$850 mxn</span>
          <p>Lo que incluye tu paquete:</p>
          <ul>
            <li>
              <i className="far fa-check-square"></i> Desayuno y comida
              (Buffet).
            </li>
            <li>
              <i className="far fa-check-square"></i> Accesso a las
              conferencias.
            </li>
            <li>
              <i className="far fa-check-square"></i> Participación en los
              talleres.
            </li>
          </ul>
          <Link to="#" className="home-buy-button">
            Comprar
          </Link>
        </div>
        <div className="package-box">
          <h3>Pase por tres días</h3>
          <span>$2,000 mxn</span>
          <p>Lo que incluye tu paquete:</p>
          <ul>
            <li>
              <i className="far fa-check-square"></i> Desayuno y comida
              (Buffet).
            </li>
            <li>
              <i className="far fa-check-square"></i> Accesso a las
              conferencias.
            </li>
            <li>
              <i className="far fa-check-square"></i> Participación en los
              talleres.
            </li>
          </ul>
          <Link to="#" className="home-buy-button">
            Comprar
          </Link>
        </div>
        <div className="package-box">
          <h3>Pase por dos días</h3>
          <span>$1,500 mxn</span>
          <p>Lo que incluye tu paquete:</p>
          <ul>
            <li>
              <i className="far fa-check-square"></i> Desayuno y comida (Buffet)
            </li>
            <li>
              <i className="far fa-check-square"></i> Accesso a las
              conferencias.
            </li>
            <li>
              <i className="far fa-check-square"></i> Participación en los
              talleres.
            </li>
          </ul>
          <Link to="#" className="home-buy-button">
            Comprar
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Prices;
