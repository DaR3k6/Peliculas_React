import React, { useState } from "react";

const FrmBusqueda = ({ datos, setDatos }) => {
  const [busqueda, setBusqueda] = useState("");

  const controlBusqueda = e => {
    let buscar = e.target.value;

    let resultado = datos.filter(pelicula => {
      return pelicula.titulo.toLowerCase().includes(buscar.toLowerCase());
    });

    if (buscar.length === 0) {
      resultado = JSON.parse(localStorage.getItem("pelicula"));
    }
    setDatos(resultado);
    setBusqueda(buscar);
  };

  const manejarEnviar = e => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={manejarEnviar}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Búsqueda"
            id="busqueda"
            value={busqueda}
            onChange={controlBusqueda}
          />
        </div>

        <button type="submit" className="btn btn-outline-success">
          BUSCAR
        </button>
      </form>
    </>
  );
};

export default FrmBusqueda;
