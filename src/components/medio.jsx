import React, { useEffect, useState } from "react";
import FrmEditar from "./FrmEditar";

const Media = ({ datos, setDatos }) => {
  //Valido traer el modal junto con la pelicula
  const [editar, setEditar] = useState(false);
  const [selecionpelicula, setSeleccion] = useState(null);
  //Leer el localStorage
  useEffect(() => {
    let pelicula = JSON.parse(localStorage.getItem("pelicula"));
    setDatos(pelicula);
  }, [setDatos]);
  //Borrar
  const borrarPelicula = id => {
    let bdNueva = datos.filter(pelicula => pelicula.id !== parseInt(id));
    setDatos(bdNueva);
    localStorage.setItem("pelicula", JSON.stringify(bdNueva));
  };
  //Funcion del modal
  const abrirModal = pelicula => {
    setSeleccion(pelicula);
    setEditar(true);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row row-cols-2 row-cols-md-2 g-5">
          {datos.length === 0 || datos == null ? (
            <>
              <h1 className="error">NO HAY PELICULAS DISPONIBLES</h1>
            </>
          ) : (
            <>
              {datos.map(pelicula => {
                return (
                  <div key={pelicula.id} className="col-md-5">
                    <div className="card h-100">
                      <div className="card-body">
                        <h5 className="card-title">{pelicula.titulo}</h5>
                        <p className="card-text">{pelicula.descripcion}</p>
                        <div className="card-footer d-flex justify-content-between">
                          <button
                            type="button"
                            className="btn btn-outline-success"
                            data-bs-toggle="modal"
                            data-bs-target="#editar"
                            onClick={() => {
                              abrirModal(pelicula);
                            }}
                          >
                            EDITAR
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-danger "
                            onClick={() => {
                              borrarPelicula(pelicula.id);
                            }}
                          >
                            BORRAR
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              {editar && selecionpelicula && (
                <FrmEditar
                  datos={datos}
                  setDatos={setDatos}
                  pelicula={selecionpelicula}
                  onClose={() => setEditar(false)}
                />
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Media;
