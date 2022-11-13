import React from 'react'
import { useContext} from 'react'
import { cartContext } from '../../../context/cartContext'
import cartSvg from "../../img/cart.svg"
import { Link } from "react-router-dom";

export default function CartWidget() {
    const {getTotalItemCount} = useContext(cartContext);
    return (
    <Link to={`/cart`}>
        <img src={cartSvg} alt="cart" />
        <span>{getTotalItemCount()}</span>
    </Link>
    )
}
