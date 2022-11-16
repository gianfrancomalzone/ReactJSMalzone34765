import React from 'react'
import { useContext} from 'react'
import { cartContext } from '../../../context/cartContext'
import { Link } from "react-router-dom";
import "../../../styles.scss"

export default function CartWidget() {
    const {getTotalItemCount} = useContext(cartContext);
    return (
    <Link to={`/cart`}>
        <img alt="cart" className='iconoCarrito' src="https://purepng.com/public/uploads/medium/purepng.com-shopping-cartshoppingcarttrolleycarriagebuggysupermarkets-1421526532325wtdqo.png"/>
        <span>{getTotalItemCount() > 0 && getTotalItemCount() }</span>
    </Link>
    )
}
