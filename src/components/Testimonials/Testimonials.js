import React from "react";
import "./Testimonials.css";
import test1 from "./images/testimonial1.jpg";
import test2 from "./images/testimonial2.jpg";
import test3 from "./images/testimonial3.jpg";

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-content">
        <h2>Testimoniales</h2>
        <div className="testimonial-text">
          <p>
            <i className="fas fa-quote-left"></i> Now that there is the Tec-9, a
            crappy spray gun from South Miami. This gun is advertised as the
            most popular gun in American crime. Do you believe that shit? It
            actually says that in the little book that comes with it: the most
            popular gun in American crime. Like they're actually proud of that
            shit. <i className="fas fa-quote-right"></i>
          </p>
          <div className="testimonial-person-data">
            <div className="testimonial-person-photo">
              <img src={test1} alt="test1" />
            </div>
            <div className="testimonial-person-name">
              <h3>Jane Doe</h3>
              <p>
                <em>Graphic designer</em>
              </p>
            </div>
          </div>
        </div>
        <div className="testimonial-text">
          <p>
            <i className="fas fa-quote-left"></i> Now that there is the Tec-9, a
            crappy spray gun from South Miami. This gun is advertised as the
            most popular gun in American crime. Do you believe that shit? It
            actually says that in the little book that comes with it: the most
            popular gun in American crime. Like they're actually proud of that
            shit. <i className="fas fa-quote-right"></i>
          </p>
          <div className="testimonial-person-data">
            <div className="testimonial-person-photo">
              <img src={test2} alt="test2" />
            </div>
            <div className="testimonial-person-name">
              <h3>John Doe</h3>
              <p>
                <em>Graphic designer</em>
              </p>
            </div>
          </div>
        </div>
        <div className="testimonial-text">
          <p>
            <i className="fas fa-quote-left"></i> Now that there is the Tec-9, a
            crappy spray gun from South Miami. This gun is advertised as the
            most popular gun in American crime. Do you believe that shit? It
            actually says that in the little book that comes with it: the most
            popular gun in American crime. Like they're actually proud of that
            shit. <i className="fas fa-quote-right"></i>
          </p>
          <div className="testimonial-person-data">
            <div className="testimonial-person-photo">
              <img src={test3} alt="test3" />
            </div>
            <div className="testimonial-person-name">
              <h3>Jane Doe</h3>
              <p>
                <em>Graphic designer</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
