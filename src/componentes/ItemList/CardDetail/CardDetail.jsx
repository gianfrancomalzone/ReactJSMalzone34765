import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Button from "../../button/Button"
import ItemCount from '../itemCount/ItemCount'
import { useContext} from 'react'
import { cartContext } from '../../../context/cartContext'
import Loader from '../../loader/Loader';

export default function CardDetail({ productos }) {

  const [count, setCount] = useState(0);
  const {addToCart} = useContext(cartContext);

  function handleAddToCart(count) {
    addToCart(productos, count)
    setCount(count);
  }

  if(productos.precio)
  return (
    <div className="col d-flex justify-content-center mb-4">
      <div className="col d-flex justify-content-center mb-4">
        <div className="card shadow mb-1  rounded">
          <h3 className="text-center">{productos.titulo}</h3>
          <h5 className="card-title pt-2 text-center text">{productos.marca}</h5>
          <img src={productos.img} className="card-img-top imgTamaño" alt={productos.titulo} />
          <div className="card-body">
            <p className="card-text text-black-50 description">{productos.descripcion}</p>
            <h5 className="text">
              Precio: <span className="precio">${productos.precio}</span>
            </h5>
          </div>
          {count === 0 ? (<ItemCount
            onAddToCart={handleAddToCart}
            stock={productos.stock}
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
  );
  return <Loader/>
}
