import Cabecera from "./components/cabecera";
import Final from "./components/footer";
import LateralAside from "./components/lateral";
import Media from "./components/medio";

const App = () => {
  return (
    <>
      <div className="header_section">
        <Cabecera />
      </div>
      <section className="contenido">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="titulo text-start text-light-emphasis ">
                <h1>PELICULAS RECIENTES</h1>
              </div>
            </div>
            <div className="row mt-12">
              <div className="col-md-9">
                <Media />
              </div>
              <div className="col-md-3">
                <aside className="lado">
                  <LateralAside />
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <Final />
      </footer>
    </>
  );
};

export default App;
