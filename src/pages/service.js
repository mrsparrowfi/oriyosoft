/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../assets/scss/pages/service.scss';

function Service() {
  return (
    <section id="service" className="service">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#E7008A"
          fillOpacity="1"
          d="M0,96L80,96C160,96,320,96,480,85.3C640,75,800,53,960,53.3C1120,53,1280,75,1360,85.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        />
      </svg>
      <div className="service--title">
        <h2>
          {' '}
          We provide excellent service to our customer in Web design,
          development, Networking and Content Creating{' '}
        </h2>
      </div>
      <div className="box--holder">
        <div className="box" style={{ '--clr': '#5000CA' }}>
          <div className="content">
            <div className="icon">
              <i className="bi bi-code-slash"></i>
            </div>
            <div className="text">
              <h3> Designing </h3>
              <p> We desing website for our customer</p>
              <a href="#"> Read More </a>
            </div>
          </div>
        </div>
        <div className="box" style={{ '--clr': '#5000CA' }}>
          <div className="content">
            <div className="icon">
              <i className="bi bi-code-slash"></i>
            </div>
            <div className="text">
              <h3> Digital Media </h3>
              <p> We desing website for our customer</p>
              <a href="#"> Read More </a>
            </div>
          </div>
        </div>
        <div className="box" style={{ '--clr': '#5000CA' }}>
          <div className="content">
            <div className="icon">
              <i className="bi bi-code-slash"></i>
            </div>
            <div className="text">
              <h3> Networking </h3>
              <p> We desing website for our customer</p>
              <a href="#"> Read More </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
