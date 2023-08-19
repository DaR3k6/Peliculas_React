import React from "react";

const Media = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-start ml-3">
          <div className="col-md-5">
            <div className="card h-100">
              <div className="card-body">
                <img
                  src="./images/img-1.png"
                  className="card-img-top"
                  alt="imagen"
                />
                <h5 className="card-title">TITULO</h5>
                <p className="card-text">DESCRIPCION</p>
                <div className="card-footer d-flex justify-content-between">
                  <button type="button" className="btn btn-outline-success">
                    EDITAR
                  </button>
                  <button type="button" className="btn btn-outline-danger ">
                    BORRAR
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Repite este bloque 'col-md-4' para cada tarjeta */}
        </div>
      </div>
    </>
  );
};

export default Media;
