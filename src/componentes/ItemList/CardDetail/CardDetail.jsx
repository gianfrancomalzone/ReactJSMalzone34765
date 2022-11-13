import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Button from "../../button/Button"
import ItemCount from '../itemCount/ItemCount'
import { useContext} from 'react'
import { cartContext } from '../../../context/cartContext'

export default function CardDetail({ autos }) {

  const [count, setCount] = useState(0);
  const {addToCart} = useContext(cartContext);

  function handleAddToCart(count) {
    addToCart(autos, count)
    setCount(count);
  }

  return (
    <div className="col d-flex justify-content-center mb-4">
      <div className="col d-flex justify-content-center mb-4">
        <div className="card shadow mb-1  rounded">
          <h3 className="text-center">{autos.marca}</h3>
          <h5 className="card-title pt-2 text-center text">{autos.titulo}</h5>
          <img src={autos.imgSrc} className="card-img-top imgTamaño" alt={autos.imgAlt} />
          <div className="card-body">
            <p className="card-text text-black-50 description">{autos.description}</p>
            <h5 className="text">
              Precio: <span className="precio">${autos.precio}</span>
            </h5>
          </div>
          {count === 0 ? (<ItemCount
            onAddToCart={handleAddToCart}
            stock={autos.stock}
            initial={1}
            text="Agregar al Lista de Compras"
          />) : (
            <Button>
              <Link to={`/cart`}>
                Ver Lista de Compras
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
