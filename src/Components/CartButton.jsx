import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../Context/CartContextProvider";

const CartButton = ( {prod} ) => { 
    const [qty, setQty] = useState(0);
    const { 
        addProd, 
        removeProd, 
        changeProdQuan, 
        prodInCart
    } = useContext(CartContext)[1];

    useEffect(() => {
        setQty(prodInCart( prod.id ));
    }, [prod, prodInCart]);

    const handleUpdate = ( e ) => {
        switch(e.target.name){
            case ( "add" ):{
                addProd(prod);
                setQty(1);
                break;
            }
            case ( "inc" ) : {
                changeProdQuan(prod.id, 1);
                setQty(qty + 1);
                break;
            }
            case ( "dec" ) : {
                if ( qty === 1 ) {
                    removeProd( prod.id );
                    setQty(0);
                }
                else {
                    changeProdQuan(prod.id, -1)
                    setQty( qty - 1 );
                }
                break;
            }
            default :
                console.log("Error");
        }
    }

    return (
        <div style={{display:"flex", justifyContent: "center", width: "100%", padding: "2% 5%"}} >
            {
                qty ? ( 
                    <div style={{display:"flex", justifyContent: "space-around", width: "100%"}}>
                        <button onClick={handleUpdate} name="dec">-1</button>
                        <button>{ qty }</button>
                        <button onClick={handleUpdate} name="inc">+1</button>
                    </div>
                ) : (
                    <button onClick={handleUpdate} name="add">Add to Cart</button>
                )
            }
        </div>
    )
}

export default CartButton;