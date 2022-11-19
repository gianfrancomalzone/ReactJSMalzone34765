import { createContext, useState } from "react";

const cartContext = createContext();


function CartContextProvider(props){
    const [cart, setCart] = useState([])

    function addToCart(item, count){
        let newCart = [...cart];
        let newItem = {...item, count}
        newCart.push(newItem)
        setCart(newCart)
    }

    function getTotalItemCount(){
        let total = 0;
        cart.forEach( itemInCart => {
            total = total + itemInCart.count
        })
        return total;
    }

    function getTotalPrecio(){
        let total = 0;
        cart.forEach( itemInCart => {total = total + itemInCart.count * itemInCart.precio})
        return total;
    }

    function removeItem(idRemovedor) {
        let newCart = cart.filter ( itemInCart => (itemInCart.id !== idRemovedor))
        setCart(newCart)
    }

    return(
        <>
        <cartContext.Provider value={{cart, addToCart, getTotalItemCount, removeItem, getTotalPrecio}}>
            {props.children}
        </cartContext.Provider>
        </>
    )
}

export {cartContext, CartContextProvider}