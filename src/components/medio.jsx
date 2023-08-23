import React, { useEffect, useState } from "react";
import FrmEditar from "./FrmEditar";

const Media = ({ datos, setDatos }) => {
  const [seleccionpelicula, setSeleccion] = useState(null);
  const [editar, setEditar] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setEditar(false);
  };

  const handleShow = () => setShow(true);

  useEffect(() => {
    let pelicula = JSON.parse(localStorage.getItem("pelicula"));
    setDatos(pelicula);
  }, [setDatos]);

  const borrarPelicula = id => {
    let bdNueva = datos.filter(pelicula => pelicula.id !== parseInt(id));
    setDatos(bdNueva);
    localStorage.setItem("pelicula", JSON.stringify(bdNueva));
  };

  const abrirModal = pelicula => {
    setSeleccion(pelicula);
    setEditar(true);
    handleShow(); // Abre el modal de edición al hacer clic en "EDITAR"
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row row-cols-2 row-cols-md-2 g-5">
          {datos == null ? (
            <h1 className="error">NO HAY PELICULAS DISPONIBLES</h1>
          ) : (
            <>
              {datos.map(pelicula => (
                <div key={pelicula.id} className="col-md-5">
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="card-title">{pelicula.titulo}</h5>
                      <p className="card-text">{pelicula.descripcion}</p>
                      <div className="card-footer d-flex justify-content-between">
                        <button
                          type="button"
                          className="btn btn-outline-success"
                          onClick={() => abrirModal(pelicula)} // Cambio aquí
                        >
                          EDITAR
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-danger"
                          onClick={() => borrarPelicula(pelicula.id)}
                        >
                          BORRAR
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {editar && seleccionpelicula && (
                <FrmEditar
                  datos={datos}
                  setDatos={setDatos}
                  pelicula={seleccionpelicula}
                  show={show}
                  handleClose={handleClose}
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
