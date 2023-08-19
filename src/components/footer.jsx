import React from "react";

const Final = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row footer">
          <div className="col-md-12 text-center">
            <ul className="social-links">
              <li>
                <a href="https://www.instagram.com/kevd_05/">
                  <img src="./images/instagram-icon.png" alt="Instagram" />
                </a>
                <a href="https://github.com/DaR3k6">
                  <img src="./images/github.png" alt="GitHub" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row sub-footer">
          <div className="col-md-12 text-center">
            <p>
              CREADO POR:
              <a href="https://www.instagram.com/kevd_05/">@kevd_05</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Final;
