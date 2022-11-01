import React from "react";
import "./card.css"
export default function Card(props) {

  return (

// props = titulo / imgSrc / imgAlt / descripcion / precio
    <> 
      <div class="col d-flex justify-content-center mb-4">
      <div className="card shadow mb-1 bg-dark rounded">
        <h5 className="card-title pt-2 text-center text-primary">{props.titulo}</h5>
        <img src={props.imgSrc} className="card-img-top imgTamaño" alt={props.imgAlt} />
        <div className="card-body">
          <p className="card-text text-white-50 description">{props.descripcion}</p>
          <h5 className="text-primary">
            Precio: <span class="precio">${props.precio}</span>
          </h5>
          <div className="d-grid gap-2">
            <button className="btn btn-primary button">Añadir a Carrito</button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

