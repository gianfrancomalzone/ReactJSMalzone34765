import React, { useState } from "react";
import "../../../styles.scss";
import Button from "../../button/Button";

export default function ItemCount({ stock, initial, text, onAddToCart }) {
    const [count, setCount] = useState(initial);

    function handleSubstract() {
        if (count > 1) setCount(count - 1);
    }
    function handleAdd() {
        if (count < stock) setCount(count + 1);
    }

    return (
        <div className="itemcountContainer">
            <div>
                <h2>Realiza tu compra</h2>
                <div className="controlPadre">
                    <Button onClick={handleSubstract} className="controlMas">
                        -
                    </Button>
                    <span className="">{count}</span>
                    <Button onClick={handleAdd} className="controlMenos">
                        +
                    </Button>
                </div>
            </div>
            <div className="itemcountBtn">
                <Button onClick={() => {
                    onAddToCart(count);
                }}>{text}</Button>
            </div>

        </div>
    );
}