import React from 'react'

export default function CardDetail(props) {
    return (    
        <div className="col d-flex justify-content-center mb-4"> 
        <div className="col d-flex justify-content-center mb-4">
          <div className="card shadow mb-1  rounded">
            <h3 className="text">{props.marca}</h3>
            <h5 className="card-title pt-2 text-center text">{props.titulo}</h5>
            <img src={props.imgSrc} className="card-img-top imgTamaño" alt={props.imgAlt} />
            <div className="card-body">
              <p className="card-text text-white-50 description">{props.descripcion}</p>
              <h5 className="text">
                Precio: <span className="precio">${props.precio}</span>
              </h5>
            </div>
          </div>
        </div>
        </div>
      )
    }
