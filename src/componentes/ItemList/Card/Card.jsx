import React from "react";
import { Link } from "react-router-dom";
import "./card.css"
import Button from "../../button/Button"

export default function Card(props) {

  return (    

    <div className="col d-flex justify-content-center mb-4">
      <div className="card shadow mb-1 rounded">
        <h3 className="text-center">{props.marca}</h3>
        <h5 className="card-title pt-2 text-center text">{props.titulo}</h5>
        <img src={props.imgSrc} className="card-img-top imgTamaño" alt={props.imgAlt} />
        <div className="card-body">
          <p className="card-text text-white-50 description">{props.descripcion}</p>
          <h5 className="text">
            Precio: <span className="precio">${props.precio}</span>
          </h5>
          <Link className="d-grid gap-2" to={`/autos/${props.id}`}>
            <Button className="btn-card">Más Información</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

