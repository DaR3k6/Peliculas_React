import React from "react";

const Media = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-start ml-3">
          <div className="col-md-5">
            <div className="card h-100">
              <img
                src="./images/img-1.png"
                className="card-img-top"
                alt="imagen"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <button type="button" className="btn btn-primary btn-sm">
                  Small button
                </button>
                <button type="button" className="btn btn-secondary btn-sm">
                  Small button
                </button>
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
