import React from "react";
import { useContext } from "react/cjs/react.development";
import { CartContext } from "../Context/CartContextProvider";

const Cart = () => {
    const [cart, {getTotal}] = useContext(CartContext);

    return (
        <div>
            { 
                cart.length ? (
                    cart.map( prod => (
                        <div style={{display: "flex", gap: "1rem", margin: "auto", width: "20%"}}>
                            <div>{prod.title}</div>
                            <div>{prod.qty}</div>
                            <div>{prod.price}</div>
                            <div>{prod.price * prod.qty}</div>
                        </div>
                    ))
                ) : (
                    <div>So Empty</div>
            )}
            <div>Cart Total = { getTotal() }</div>
        </div>
    )
}

export default Cart;