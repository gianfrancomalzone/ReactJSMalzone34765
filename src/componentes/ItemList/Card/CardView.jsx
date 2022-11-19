import React, { useContext } from 'react'
import { cartContext } from "../../../context/cartContext"
import Button from '../../button/Button'
import "../../../styles.scss"
import { createBuyOrder } from '../../../services/firebase'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

export default function CardView() {
    const { cart, removeItem, getTotalPrecio } = useContext(cartContext)

    function handleCheckOut(){
        const buyerData = {
            name:"",
            email:"",
            phone:"",
        }

        const orderData = {
            buyerData: buyerData,
            cart: cart,
            total: getTotalPrecio(),
            date: new Date()
        }

        createBuyOrder(orderData).then(respuesta => {
            Swal.fire({
                title: 'Gracias por Comprar!',
                icon: 'success',
                confirmButtonText: 'Cool' })
        });
    }

    return (<>
    <div className=" row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 ">
        {cart.map((productos) => (
                <div className="col d-flex justify-content-center mb-4 " key={productos.id}>
                    <div className="card shadow mb-1 rounded ">
                        <h3 className="text-center">{productos.titulo}</h3>
                        <h5 className="card-title pt-2 text-center text">{productos.titulo}</h5>
                        <img src={productos.img} className="card-img-top imgTamaño" alt={productos.imgAlt} />
                        <p className="card-text description text-center text">Precio Total: ${productos.precio * productos.count}</p>
                        <Button className="btn-card " onClick={() => removeItem(productos.id)}>Eliminar producto</Button>
                    </div>
                </div>
        ))}
        </div>
        <p>Precio Final: $</p>
        <Button onClick={handleCheckOut}> Finalizar Compra</Button>
    </>
    );
}


// 1.41