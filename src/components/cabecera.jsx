import React, { useEffect } from "react";
import { Carousel } from "bootstrap";

const Cabecera = () => {
  useEffect(() => {
    const myCarouselElement = document.querySelector("#carusel");

    const carousel = new Carousel(myCarouselElement, {
      interval: 2000,
      touch: false,
    });

    return () => {
      carousel.dispose();
    };
  }, []);

  return (
    <>
      <div className="header_main">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="logo">
            <a href="index.html">
              <img src="./images/logo.png" alt="Logo" />
            </a>
          </div>

          <button
            className="navbar-toggler ms-5"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav menu_main">
              <li className="nav-item">
                <a className="nav-link" href="www.test.com">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="www.test.com">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="www.test.com">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="www.test.com">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="www.test.com">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="banner_section layout_padding">
        <div id="carusel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <img
                  src="./images/blog-mobile-bg.png"
                  className="d-block w-100"
                  alt="imagen"
                />
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <h1 className="banner_taital">Adventure</h1>
                <p className="banner_text">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered There are ma
                  available, but the majority have suffered
                </p>
                <div className="read_bt">
                  <a href="www.test.com">Get A Quote</a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <h1 className="banner_taital">Adventure</h1>
                <p className="banner_text">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered There are ma
                  available, but the majority have suffered
                </p>
                <div className="read_bt">
                  <a href="www.test.com">Get A Quote</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cabecera;
