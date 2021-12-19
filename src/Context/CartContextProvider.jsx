import React, { useState } from "react";

const CartContext = React.createContext();

const CartContextProvider = ( { children } ) => {
    const [cart, setCart] = useState([]);


    const addProd = ( prod ) => {
        setCart( [ ...cart, {...prod, qty: 1} ] );
    }

    const removeProd = ( prodId ) => {
        const newCart = cart.filter( prod => prod.id !== prodId );
        setCart( newCart );
    }

    const changeProdQuan = ( prodId, value ) => {
        let newQty;

        const newCart = cart.map( prod => {
            if ( prod.id === prodId ) {
                prod.qty += value;
                newQty = prod.qty;
            }
            return prod;
        });

        setCart( newCart );
        return newQty;
    }
    
    const prodInCart = ( prodId ) => {
        let qty = 0;
        cart.map( prod => {
            if ( prod.id === prodId ) {
                qty = prod.qty;
            }
            return prod;
        });
        
        return qty;
    }

    const getTotal = () => {
        let res = 0;
        for ( const prod of cart ){
            res += ( prod.price * prod.qty ); 
        }
        return res;
    }

    return (
        <CartContext.Provider value={[cart, {addProd, removeProd, changeProdQuan, prodInCart, getTotal}]}>
            { children }
        </CartContext.Provider>
    )
}

export {
    CartContextProvider,
    CartContext
}