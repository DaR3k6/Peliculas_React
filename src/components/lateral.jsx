import React, { useState } from "react";
import FrmAgregar from "./FrmAgregar";
import FrmBusqueda from "./FrmBusqueda";

const LateralAside = ({ pelicula, datos, setDatos }) => {
  const [navegacion, setNavegacion] = useState("");
  const [titulo, setTitulo] = useState("");

  const cambiarTituloNavegacion = click => {
    setNavegacion(click);
    setTitulo(click === "busqueda" ? "Búsqueda" : "Agregar");
  };

  const navegacionFormulario = () => {
    if (navegacion === "busqueda") {
      return <FrmBusqueda datos={datos} setDatos={setDatos} />;
    } else if (navegacion === "agregar") {
      return <FrmAgregar datos={datos} setDatos={setDatos} />;
    }
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item link-dark navbar-item">
                  <button
                    className={`nav-link link-dark ${
                      navegacion === "busqueda" ? "active" : ""
                    }`}
                    onClick={() => cambiarTituloNavegacion("busqueda")}
                  >
                    Busqueda
                  </button>
                </li>
                <li className="nav-item navbar-item">
                  <button
                    className={`nav-link link-dark ${
                      navegacion === "agregar" ? "active" : ""
                    }`}
                    onClick={() => cambiarTituloNavegacion("agregar")}
                  >
                    Agregar
                  </button>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title">{titulo}</h5>
              {navegacionFormulario()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LateralAside;
