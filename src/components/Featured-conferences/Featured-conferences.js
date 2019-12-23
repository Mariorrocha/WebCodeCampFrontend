import React, { Component } from "react";
import "./Featured-conferences.css";
import { Link } from "react-router-dom";

export default class FeaturedConferences extends Component {
  onClickRotacion(e) {
    const conference1 = document.querySelector("#conference1");
    const conference2 = document.querySelector("#conference2");
    const conference3 = document.querySelector("#conference3");
    if (e.target.className === "javascript") {
      conference1.style.display = "block";
      conference2.style.display = "none";
      conference3.style.display = "none";
    } else if (e.target.className === "phyton") {
      conference1.style.display = "none";
      conference2.style.display = "block";
      conference3.style.display = "none";
    } else if (e.target.className === "nodejs") {
      conference1.style.display = "none";
      conference2.style.display = "none";
      conference3.style.display = "block";
    } else {
      console.log("No hiciste clic en un curso");
    }
  }

  render() {
    return (
      <section className="featured-conferences">
        <div className="bg-featured-conferences"></div>
        <div className="featured-conferences-content">
          <h2>Conferencias destacadas</h2>
          <nav
            className="featured-conferences-nav"
            id="featured-conferences-nav"
          >
            <Link
              to="#conference1"
              className="javascript"
              onClick={this.onClickRotacion}
            >
              <i className="fas fa-code"></i> JavaScript
            </Link>
            <Link
              to="#conference2"
              className="phyton"
              onClick={this.onClickRotacion}
            >
              <i className="fas fa-code"></i> Python
            </Link>
            <Link
              to="#conference3"
              className="nodejs"
              onClick={this.onClickRotacion}
            >
              <i className="fas fa-code"></i> NodeJS
            </Link>
          </nav>
          <div id="conference1" className="conference">
            <ul>
              <li>
                <h3>JavaScript básico</h3>
              </li>
              <li>
                <i className="far fa-clock"></i> 9:00 horas
              </li>
              <li>
                <i className="fas fa-calendar-alt"></i> 12 Octubre
              </li>
              <li>
                <i className="fas fa-user-tie"></i> John Doe
              </li>
            </ul>
            <hr />
            <ul>
              <li>
                <h3>JavaScript intermedio</h3>
              </li>
              <li>
                <i className="far fa-clock"></i> 9:00 horas
              </li>
              <li>
                <i className="fas fa-calendar-alt"></i> 12 Octubre
              </li>
              <li>
                <i className="fas fa-user-tie"></i> Jane Doe
              </li>
            </ul>
            <Link to="/conference" className="more-information-button">
              Mostras Todos los Eventos
            </Link>
          </div>
          <div id="conference2" className="conference">
            <ul>
              <li>
                <h3>Python básico</h3>
              </li>
              <li>
                <i className="far fa-clock"></i> 9:00 horas
              </li>
              <li>
                <i className="fas fa-calendar-alt"></i> 12 Octubre
              </li>
              <li>
                <i className="fas fa-user-tie"></i> John Doe
              </li>
            </ul>
            <hr />
            <ul>
              <li>
                <h3>Python avanzado</h3>
              </li>
              <li>
                <i className="far fa-clock"></i> 9:00 horas
              </li>
              <li>
                <i className="fas fa-calendar-alt"></i> 12 Octubre
              </li>
              <li>
                <i className="fas fa-user-tie"></i> Jane Doe
              </li>
            </ul>
            <Link to="/conference" className="more-information-button">
              Mostras Todos los Eventos
            </Link>
          </div>
          <div id="conference3" className="conference">
            <ul>
              <li>
                <h3>NodeJS básico</h3>
              </li>
              <li>
                <i className="far fa-clock"></i> 9:00 horas
              </li>
              <li>
                <i className="fas fa-calendar-alt"></i> 12 Octubre
              </li>
              <li>
                <i className="fas fa-user-tie"></i> John Doe
              </li>
            </ul>
            <hr />
            <ul>
              <li>
                <h3>NodeJS avanzado</h3>
              </li>
              <li>
                <i className="far fa-clock"></i> 9:00 horas
              </li>
              <li>
                <i className="fas fa-calendar-alt"></i> 12 Octubre
              </li>
              <li>
                <i className="fas fa-user-tie"></i> Jane Doe
              </li>
            </ul>
            <Link to="/conference" className="more-information-button">
              Mostras Todos los Eventos
            </Link>
          </div>
        </div>
      </section>
    );
  }
}
