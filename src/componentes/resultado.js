import React, { Component } from "react";
import Imagen from "./imagen";
import Paginacion from "./paginacion";

class Resultado extends Component {
  mostrarImagenes = () => {
    const imagenes = this.props.imagenes;
    if (imagenes.length === 0) return null;

    return (
      <React.Fragment>
        <div className="col-12 p-5 row" style={{ display: "flex", flexWrap: "wrap" }}>
          {imagenes.map((imagen) => (
            <Imagen key={imagen.id} imagen={imagen} style={{ borderRadius: '10px', margin: '10px' }} />

          ))
          }
        </div>\
      </React.Fragment>
    );
  };

  render() {
    return (
      <React.Fragment>
        <div className="col-12 p-5 row">
          {this.mostrarImagenes()}
        </div>
      </React.Fragment>
    );
  }
}

export default Resultado;
