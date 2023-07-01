import React, { Component } from 'react';
import Buscador from './componentes/buscador';
import Resultado from './componentes/resultado';

class App extends Component {
  state = {
    termino: '',
    imagenes: [],
    pagina: 1
  };

  scroll = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  paginaAnterior = () => {
    const { pagina } = this.state;

    if (pagina === 1) return;

    this.setState(
      { pagina: pagina - 1 },
      () => {
        this.consultarApi();
        this.scroll();
      }
    );
  };

  paginaSiguiente = () => {
    const { pagina } = this.state;

    this.setState(
      { pagina: pagina + 1 },
      () => {
        this.consultarApi();
        this.scroll();
      }
    );
  };

  consultarApi = () => {
    const { termino, pagina } = this.state;
    const url = `https://pixabay.com/api/?key=37771168-e3f86b94675a43144cb944f7c&q=${termino}&per_page=30&page=${pagina}`;

    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({ imagenes: resultado.hits }));
  };

  datosBusqueda = (termino) => {
    this.setState(
      { termino, pagina: 1 },
      () => {
        this.consultarApi();
      }
    );
  };

  render() {
    const { imagenes, pagina } = this.state;

    return (
      <div className="app container">
        <div className="jumbotron">
        <h1 className="display-4 text-center" style={{ color: '#FFFFFF', fontSize: '35px', margin: '5px', padding: '5px', fontWeight: 'bold', fontFamily: '"Arial Black", Gadget, sans-serif' }}>Buscador de Imágenes</h1>
          <Buscador datosBusqueda={this.datosBusqueda} />
        </div>
        <div className="row justify-content-center">
          <Resultado imagenes={imagenes} />
          {imagenes.length > 0 && (
            <div className="paginacion">
              {pagina > 1 && (
                <button className="btn btn-info mr-1" onClick={this.paginaAnterior}>
                  &laquo; Anterior
                </button>
              )}
              <button className="btn btn-info" onClick={this.paginaSiguiente}>
                Siguiente &raquo;
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
