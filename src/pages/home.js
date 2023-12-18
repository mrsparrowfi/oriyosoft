/* eslint-disable max-len */

import React, { useEffect } from 'react';
import '../assets/scss/pages/home.scss';

import Design from '../assets/images/screen/test4.jpg';
import Content from '../assets/images/screen/test1.jpg';
import Network from '../assets/images/screen/test2.jpeg';

function Home() {
  useEffect(() => {
    const onScroll = () => {
      const navbar = document.getElementById('menu--holder');
      const home = document.getElementById('home');
      const navPos = navbar.getBoundingClientRect().top;
      const navbarLinks = document.querySelectorAll('nav a');

      const scrollPos = window.scrollY;
      if (scrollPos > navPos) {
        navbar.classList.add('sticky');
        home.classList.add('navbarOffsetMargin');
      } else {
        navbar.classList.remove('sticky');
        home.classList.remove('navbarOffsetMargin');
      }

      navbarLinks.forEach((link) => {
        const section = document.querySelector(link.hash);
        if (
          scrollPos + 350 > section.offsetTop &&
          scrollPos + 350 < section.offsetTop + section.offsetHeight
        ) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <section id="home" className="home">
      <header>
        <div className="header-ribbon">
          <div className="phone">
            <i className="bi bi-telephone-outbound" />
            <span> +358 41 741 2915 </span>
          </div>

          <div className="email">
            <i className="bi bi-envelope" />
            <span> info@oriyosoft.com </span>
          </div>
        </div>

        <div id="menu--holder" className="menu--holder">
          <div className="logo">Oriyosoft</div>
          <nav id="main-nav">
            <a href="#home" className="active">
              {' '}
              Home{' '}
            </a>
            <a href="#about"> About Us </a>
            <a href="#service"> Our Service </a>
            <a href="#team"> Our Team </a>
            <a href="#contact"> Contact Us </a>
          </nav>
        </div>
      </header>
      <div className="header--body" id="header--body">
        <div className="banner">
          <div className="black--border">
            <div className="circle" />
            <div className="img-holder">
              <img className="web-design" src={Content} alt="content-img" />
              <img className="web-content" src={Network} alt="network-img" />
              <img className="web-network" src={Design} alt="design-img" />
            </div>
          </div>
        </div>
        <div className="header--left">
          <div className="left--content">
            <div className="web-design">
              <h2> Web Design </h2>
              <p>
                Web Design. Proident aliqua non aliquip amet adipisicing est qui
                id aute minim duis consectetur ea culpa. Irure laboris mollit
                ullamco ea pariatur cillum adipisicing laborum occaecat.
                Exercitation culpa veniam ipsum pariatur cupidatat sit
                consectetur reprehenderit proident id cupidatat do. Anim
                consequat labore quis duis et in.
              </p>
              <p>
                Web Design. Irure commodo ipsum voluptate voluptate laboris aute
                minim nostrud minim ut nulla. Et minim minim reprehenderit elit.
                Pariatur nostrud ea laborum nostrud in qui id deserunt proident
                amet. Nulla ullamco excepteur esse occaecat proident ad anim et
                ea eu duis duis. Irure commodo ipsum voluptate voluptate laboris
                aute minim nostrud minim ut nulla. Et minim minim reprehenderit
                elit.
              </p>
            </div>
            <div className="web-content">
              <h2> Web content </h2>
              <p>
                Web content. Proident aliqua non aliquip amet adipisicing est
                qui id aute minim duis consectetur ea culpa. Irure laboris
                mollit ullamco ea pariatur cillum adipisicing laborum occaecat.
                Exercitation culpa veniam ipsum pariatur cupidatat sit
                consectetur reprehenderit proident id cupidatat do. Anim
                consequat labore quis duis et in.
              </p>
              <p>
                Web content. Irure commodo ipsum voluptate voluptate laboris
                aute minim nostrud minim ut nulla. Et minim minim reprehenderit
                elit. Pariatur nostrud ea laborum nostrud in qui id deserunt
                proident amet. Nulla ullamco excepteur esse occaecat proident ad
                anim et ea eu duis duis. Irure commodo ipsum voluptate voluptate
                laboris aute minim nostrud minim ut nulla. Et minim minim
                reprehenderit elit.
              </p>
            </div>
            <div className="web-network">
              <h2> Web Network </h2>
              <p>
                Web network. Proident aliqua non aliquip amet adipisicing est
                qui id aute minim duis consectetur ea culpa. Irure laboris
                mollit ullamco ea pariatur cillum adipisicing laborum occaecat.
                Exercitation culpa veniam ipsum pariatur cupidatat sit
                consectetur reprehenderit proident id cupidatat do. Anim
                consequat labore quis duis et in.
              </p>
              <p>
                Web network. Irure commodo ipsum voluptate voluptate laboris
                aute minim nostrud minim ut nulla. Et minim minim reprehenderit
                elit. Pariatur nostrud ea laborum nostrud in qui id deserunt
                proident amet. Nulla ullamco excepteur esse occaecat proident ad
                anim et ea eu duis duis. Irure commodo ipsum voluptate voluptate
                laboris aute minim nostrud minim ut nulla. Et minim minim
                reprehenderit elit.
              </p>
            </div>
          </div>
        </div>

        <div className="header--right">
          <div className="right--content">
            <div className="web-design">
              <h2> Web Design </h2>
              <p>
                Web Design. Proident aliqua non aliquip amet adipisicing est qui
                id aute minim duis consectetur ea culpa. Irure laboris mollit
                ullamco ea pariatur cillum adipisicing laborum occaecat.
                Exercitation culpa veniam ipsum pariatur cupidatat sit
                consectetur reprehenderit proident id cupidatat do. Anim
                consequat labore quis duis et in.
              </p>
              <p>
                Web Design. Irure commodo ipsum voluptate voluptate laboris aute
                minim nostrud minim ut nulla. Et minim minim reprehenderit elit.
                Pariatur nostrud ea laborum nostrud in qui id deserunt proident
                amet. Nulla ullamco excepteur esse occaecat proident ad anim et
                ea eu duis duis.
              </p>
              <p>
                Web Design. Irure commodo ipsum voluptate voluptate laboris aute
                minim nostrud minim ut nulla. Et minim minim reprehenderit elit.
              </p>
            </div>
            <div className="web-content">
              <h2> Web Content </h2>
              <p>
                Web content. Proident aliqua non aliquip amet adipisicing est
                qui id aute minim duis consectetur ea culpa. Irure laboris
                mollit ullamco ea pariatur cillum adipisicing laborum occaecat.
                Exercitation culpa veniam ipsum pariatur cupidatat sit
                consectetur reprehenderit proident id cupidatat do. Anim
                consequat labore quis duis et in.
              </p>
              <p>
                Web content. Irure commodo ipsum voluptate voluptate laboris
                aute minim nostrud minim ut nulla. Et minim minim reprehenderit
                elit. Pariatur nostrud ea laborum nostrud in qui id deserunt
                proident amet. Nulla ullamco excepteur esse occaecat proident ad
                anim et ea eu duis duis.
              </p>
              <p>
                Web content. Irure commodo ipsum voluptate voluptate laboris
                aute minim nostrud minim ut nulla. Et minim minim reprehenderit
                elit.
              </p>
            </div>
            <div className="web-network">
              <h2> Web Network </h2>
              <p>
                Web network. Proident aliqua non aliquip amet adipisicing est
                qui id aute minim duis consectetur ea culpa. Irure laboris
                mollit ullamco ea pariatur cillum adipisicing laborum occaecat.
                Exercitation culpa veniam ipsum pariatur cupidatat sit
                consectetur reprehenderit proident id cupidatat do. Anim
                consequat labore quis duis et in.
              </p>
              <p>
                Web network. Irure commodo ipsum voluptate voluptate laboris
                aute minim nostrud minim ut nulla. Et minim minim reprehenderit
                elit. Pariatur nostrud ea laborum nostrud in qui id deserunt
                proident amet. Nulla ullamco excepteur esse occaecat proident ad
                anim et ea eu duis duis.
              </p>
              <p>
                Web network. Irure commodo ipsum voluptate voluptate laboris
                aute minim nostrud minim ut nulla. Et minim minim reprehenderit
                elit.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="svg-img">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -35 1440 320">
          <path
            fill="#E7008A"
            fillOpacity="0.9"
            d="M0,224L48,224C96,224,192,224,288,202.7C384,181,480,139,576,101.3C672,64,768,32,864,21.3C960,11,1056,21,1152,21.3C1248,21,1344,11,1392,5.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
}

export default Home;
