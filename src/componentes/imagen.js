import React, { Component } from "react";

const Imagen = (props) => {
    
    

    return(
        <React.Fragment>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <div className="card">
                <img src={props.imagen.previewURL} alt={props.imagen.tags} className="card-img-top" />
                <div className="card-body">
                    <p className="card-text">{props.imagen.likes} Me Gusta</p>
                    <p className="card-text">{props.imagen.views} Vistas</p>
                </div>
                <div className="card-footer">
                    <a href={props.imagen.largeImageURL} target="_blank" className="btn btn-primary btn-block">Ver Imagen</a>
                </div>
                </div>
            </div>
        </React.Fragment>
        
    
    );
    

}

export default Imagen;