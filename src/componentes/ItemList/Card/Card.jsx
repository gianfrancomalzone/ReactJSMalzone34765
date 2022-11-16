import React from "react";
import { Link } from "react-router-dom";
import "../../../styles.scss"
import Button from "../../button/Button"

export default function Card(props) {

  return (    

    <div className="col d-flex justify-content-center mb-4">
      <div className="card shadow mb-1 rounded">
        <h3 className="text-center">{props.titulo}</h3>
        <h5 className="card-title pt-2 text-center text">{props.marca}</h5>
        <img src={props.img} className="card-img-top imgTamaño" alt={props.titulo} />
        <div className="card-body">
          <p className="card-text text-white-50 description">{props.descripcion}</p>
          <h5 className="text">
            Precio: <span className="precio text-center">${props.precio}</span>
          </h5>
          <Link className="d-grid gap-2" to={`/productos/${props.id}`}>
            <Button className="btn-card">Más Información</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

