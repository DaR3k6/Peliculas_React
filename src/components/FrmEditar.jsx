import React, { useEffect, useState } from "react";

const FrmEditar = ({ pelicula, onClose }) => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  useEffect(() => {
    if (pelicula) {
      setTitulo(pelicula.titulo);
      setDescripcion(pelicula.descripcion);
    }
  }, [pelicula]);

  const guardarCambios = () => {
    onClose();
  };
  return (
    <>
      <div
        className="modal fade"
        id="editar"
        tabIndex="-1"
        aria-labelledby="editarLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editarLabel">
                EDITAR PELICULA
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="titulo" className="form-label">
                    Título
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="titulo"
                    value={titulo}
                    onChange={e => setTitulo(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="descripcion" className="form-label">
                    Descripción
                  </label>
                  <textarea
                    className="form-control"
                    id="descripcion"
                    value={descripcion}
                    onChange={e => setDescripcion(e.target.value)}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={onClose}
              >
                Cancelar
              </button>
              <button
                type="button"
                className="btn btn-success"
                onClick={guardarCambios}
              >
                Guardar Cambios
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrmEditar;
