import React from "react";

const FrmBusqueda = () => {
  return (
    <>
      <form>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Busqueda"
            id="busqueda"
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
