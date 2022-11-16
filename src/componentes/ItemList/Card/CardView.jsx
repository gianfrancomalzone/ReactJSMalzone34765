import React, { useContext } from 'react'
import { cartContext } from "../../../context/cartContext"
import Button from '../../button/Button'
import "../../../styles.scss"

export default function CardView() {
    const { cart, removeItem } = useContext(cartContext)

    return (<>
    <div className=" row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 ">
        {cart.map((productos) => (
                <div className="col d-flex justify-content-center mb-4 ">
                    <div className="card shadow mb-1 rounded ">
                        <h3 className="text-center">{productos.titulo}</h3>
                        <h5 className="card-title pt-2 text-center text">{productos.titulo}</h5>
                        <img src={productos.img} className="card-img-top imgTamaño" alt={productos.imgAlt} />
                        <p className="card-text description text-center text">Precio Total: ${productos.precio * productos.count}</p>
                        <div className=''>
                            <Button className="btn-card " onClick={() => removeItem(productos.id)}>Eliminar producto</Button>
                        </div>
                    </div>
                </div>
        ))}
        </div>
    </>
    );
}
