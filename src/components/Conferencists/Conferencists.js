import React from "react";
import "./Conferencists.css";
import { Link } from "react-router-dom";
import conf1 from "./images/conferencist1.jpg";
import conf2 from "./images/conferencist2.jpg";
import conf3 from "./images/conferencist3.jpg";
import conf4 from "./images/conferencist4.jpg";
import conf5 from "./images/conferencist5.jpg";
import conf6 from "./images/conferencist6.jpg";

const Conferencists = () => {
  return (
    <section id="conferencists">
      <div className="conferencists-content">
        <h2>Conoce a los conferencistas</h2>
        <div className="conferencist">
          <div className="conferencist-image-wrapper">
            <img src={conf1} alt="conf1" />
          </div>
          <div className="conferencist-data-wrapper">
            <div className="conferencist-name">John Doe</div>
            <div className="conferencist-profile">
              <Link to="#" target="_blank">
                Ver perfil
              </Link>
            </div>
          </div>
        </div>
        <div className="conferencist">
          <div className="conferencist-image-wrapper">
            <img src={conf2} alt="conf2" />
          </div>
          <div className="conferencist-data-wrapper">
            <div className="conferencist-name">Jane Doe</div>
            <div className="conferencist-profile">
              <Link to="#" target="_blank">
                Ver perfil
              </Link>
            </div>
          </div>
        </div>
        <div className="conferencist">
          <div className="conferencist-image-wrapper">
            <img src={conf3} alt="conf3" />
          </div>
          <div className="conferencist-data-wrapper">
            <div className="conferencist-name">John Doe</div>
            <div className="conferencist-profile">
              <Link to="#" target="_blank">
                Ver perfil
              </Link>
            </div>
          </div>
        </div>
        <div className="conferencist">
          <div className="conferencist-image-wrapper">
            <img src={conf4} alt="conf4" />
          </div>
          <div className="conferencist-data-wrapper">
            <div className="conferencist-name">Jane Doe</div>
            <div className="conferencist-profile">
              <Link to="#" target="_blank">
                Ver perfil
              </Link>
            </div>
          </div>
        </div>
        <div className="conferencist">
          <div className="conferencist-image-wrapper">
            <img src={conf5} alt="conf5" />
          </div>
          <div className="conferencist-data-wrapper flex">
            <div className="conferencist-name">John Doe</div>
            <div className="conferencist-profile">
              <Link to="#" target="_blank">
                Ver perfil
              </Link>
            </div>
          </div>
        </div>
        <div className="conferencist">
          <div className="conferencist-image-wrapper">
            <img src={conf6} alt="conf6" />
          </div>
          <div className="conferencist-data-wrapper">
            <div className="conferencist-name">Jane Doe</div>
            <div className="conferencist-profile">
              <Link to="#" target="_blank">
                Ver perfil
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conferencists;
