import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const FrmEditar = ({ pelicula, datos, setDatos, show, handleClose }) => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  useEffect(() => {
    if (pelicula) {
      setTitulo(pelicula.titulo);
      setDescripcion(pelicula.descripcion);
    }
  }, [pelicula]);

  const guardarPelicula = (e, id) => {
    e.preventDefault();
    let peliActual = [...datos];
    let i = peliActual.findIndex(pelicula => pelicula.id === id);
    if (i !== -1) {
      let datosFormularios = {
        id,
        titulo: titulo,
        descripcion: descripcion,
      };
      peliActual[i] = datosFormularios;
      localStorage.setItem("pelicula", JSON.stringify(peliActual));
      setDatos(peliActual);
      handleClose();
    } else {
      console.log("No se encontró la película con el ID");
    }
  };

  const handleSave = e => {
    guardarPelicula(e, pelicula.id);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="w-100 text-center">Editar Película</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <form
              onSubmit={e => {
                guardarPelicula(e, pelicula.id);
              }}
            >
              <div className="mb-3">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Título..."
                  value={titulo}
                  onChange={e => setTitulo(e.target.value)}
                />
              </div>

              <div className="mb-5">
                <textarea
                  className="form-control"
                  placeholder="Descripción..."
                  value={descripcion}
                  onChange={e => setDescripcion(e.target.value)}
                />
              </div>
            </form>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={handleClose}>
          Salir
        </Button>
        <Button className="btn btn-success" onClick={handleSave}>
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FrmEditar;
