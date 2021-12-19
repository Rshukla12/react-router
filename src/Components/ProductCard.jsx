import React from "react";
import { useHistory } from "react-router-dom";
import CartButton from "./CartButton";
import styles from "./ProductCard.module.css";

const ProductCard = ( prod ) => {
    const history = useHistory()
    
    const { 
        id, 
        title, 
        price, 
        brand, 
        img, 
        category, 
        info 
    } = prod;
    
    const displayProd = () => {
        history.push(`/details/${id}`);
    }

    return (
        <div className={ info ? styles.infoCard : styles.card } onClick={displayProd} >
            <img className={styles.img} src={img} alt={title} />
            <div>
                <div className={styles.details}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.price}>Price - &#8377;{price}</div>
                </div>
                { info && (
                    <div>
                        <div className={styles.info} >
                            <div> Brand - {brand}</div>
                            <div> Category - {category}</div>
                        </div>
                        <CartButton prod={prod} />
                    </div> 

                ) }
            </div>
        </div>
    )
}

export default ProductCard;