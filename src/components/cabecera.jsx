import React, { useEffect } from "react";
import { Carousel } from "bootstrap";

const Cabecera = () => {
  useEffect(() => {
    const myCarouselElement = document.querySelector("#carusel");

    const carousel = new Carousel(myCarouselElement, {
      interval: 3000,
      touch: false,
    });
    return carousel;
  }, []);

  return (
    <>
      <div className="header_main">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="logo ">
            <a href="index.html">
              <img
                src="./images/logo.png"
                className="logoPrincipal"
                alt="Logo"
              />
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
                  INICIO
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="www.test.com">
                  SERVICIOS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-center" href="www.test.com">
                  PELICULAS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="www.test.com">
                  CONTACTANOS
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div id="carusel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="./images/pelicula1.png"
                className="d-block w-100"
                alt="imagen1"
              />
            </div>
            <div className="carousel-item">
              <img
                src="./images/pelicula1.png"
                className="d-block w-100"
                alt="imagen2"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carusel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carusel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Cabecera;
