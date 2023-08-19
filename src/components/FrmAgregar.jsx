import React, { useState } from "react";

const FrmAgregar = ({ setDatos }) => {
  // Creo los useState para controlar los valores de los inputs
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  // Metodo para almacenar en el localStorage
  const salvarLocal = anadirDatos => {
    let json = JSON.parse(localStorage.getItem("pelicula"));
    if (Array.isArray(json)) {
      json.push(anadirDatos);
    } else {
      json = [anadirDatos];
    }

    setDatos(json);
    localStorage.setItem("pelicula", JSON.stringify(json));
  };

  // Manejador del envío del formulario
  const capturarDatos = e => {
    e.preventDefault();

    let valorFormulario = {
      id: new Date().getTime(),
      titulo: titulo, // Utilizo los valores controlados por el estado
      descripcion: descripcion, // Utilizo los valores controlados por el estado
    };
    setDatos(valorFormulario);
    salvarLocal(valorFormulario);
    // Reinicio los inputs
    setTitulo("");
    setDescripcion("");
  };
  //Renicio el titulo
  const actualizarTitulo = e => {
    setTitulo(e.target.value);
  };
  //Renicio la descripcion
  const actualizarDescripcion = e => {
    setDescripcion(e.target.value);
  };
  return (
    <>
      <form onSubmit={capturarDatos}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre"
            id="titulo"
            name="titulo"
            onChange={actualizarTitulo}
            value={titulo} // Uso el valor controlado por el estado
          />
        </div>

        <div className="mb-3">
          <textarea
            value={descripcion} // Uso el valor controlado por el estado
            onChange={actualizarDescripcion}
            className="form-control"
            placeholder="Descripción"
            id="descripcion"
            name="descripcion"
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
