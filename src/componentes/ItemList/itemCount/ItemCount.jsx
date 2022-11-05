import React, { useState } from "react";

export default function ItemCount({ stock, initial, text, onAddToCart }) {
    const [count, setCount] = useState(initial);

    function handleSubstract() {
    if (count > 1) setCount(count - 1);
    }
    function handleAdd() {
    if (count < stock) setCount(count + 1);
    }

    return (
    <div className="">
        <div>
        <h2>Finalizar compra</h2>
        <div className="">
            <Button color="#fc6622" onClick={handleSubstract}>
            -
            </Button>
            <strong>{count}</strong>
            <Button color="#00cc22" onClick={handleAdd}>
            +
            </Button>
        </div>
        </div>
        <div className="">
        <button
            onClick={() => {
            onAddToCart(count);
            }}
        >
            {text}
        </button>
        </div>
    </div>
    );
}
