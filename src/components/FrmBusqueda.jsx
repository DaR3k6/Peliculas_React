import React from "react";

const FrmBusqueda = () => {
  return (
    <>
      <form>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="BUSCAR"
            id="busqueda"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Buscar
        </button>
      </form>
    </>
  );
};

export default FrmBusqueda;