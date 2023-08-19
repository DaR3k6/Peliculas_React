import React from "react";

const FrmAgregar = () => {
  return (
    <>
      <form>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre"
            id="nombre"
          />
        </div>

        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Descripción"
            id="descripcion"
            rows="4"
          />
        </div>

        <button type="submit" className="btn btn-outline-success">
          AGREGAR
        </button>
      </form>
    </>
  );
};

export default FrmAgregar;
