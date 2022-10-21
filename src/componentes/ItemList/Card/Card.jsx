import React from "react";
import "./card.css"
export default function Card(props) {
  return (

// props = titulo / imagen / marca / precio / stock
    <> 
      <div className="card marginCard shadow mb-1 bg-dark rounded">
        <h5 className="card-title pt-2 text-center text-primary">{props.titulo}</h5>
        <img src={props.imagen} className="card-img-top imgTamaño" alt={props.titulo} />
        <div className="card-body">
          <p className="card-text text-white-50 description">{props.marca}</p>
          <h5 className="text-primary">
            Precio: <span className="precio"> {props.precio} U$D</span>
            <br />
            Stock: <span className="stock">{props.stock}</span>
          </h5>
          <div className="d-grid gap-2">
            <button className="btn btn-primary button">Añadir a Carrito</button>
          </div>
        </div>
        </div>
    </>
  );
}

