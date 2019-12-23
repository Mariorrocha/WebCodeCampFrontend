import React, { Component } from "react";
import "./Navigation.css";
import { HashLink as Link } from "react-router-hash-link";

export default class Navigation extends Component {
  onClickNavigation() {
    const mainNav = document.querySelector("#main-nav");
    if (mainNav.style.display === "none") {
      mainNav.style.display = "flex";
    } else {
      mainNav.style.display = "none";
    }
  }

  render() {
    return (
      <div>
        <section className="navbar">
          <div className="content-navbar">
            <div className="logo">Web/Code/Camp</div>
            <div id="hamburguer-btn" onClick={this.onClickNavigation}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="main-nav" id="main-nav">
              <Link to="#event-presentation">Conferencia</Link>
              <Link to="#conferencists">Invitados</Link>
              <Link to="#prices">Reservaciones</Link>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
