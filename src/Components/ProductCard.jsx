import React from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";

const ProductCard = ( { id, title, price, brand, img, category, info } ) => {

    return (
        <Link className={ info ? styles.infoCard : styles.card } to={`/details/${id}`} >
            <img className={styles.img} src={img} alt={title} />
            <div>
                <div className={styles.details}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.price}>Price - &#8377;{price}</div>
                </div>
                { info && ( 
                    <div className={styles.info} >
                        <div> Brand - {brand}</div>
                        <div> Category - {category}</div>
                    </div> 
                ) }
            </div>
        </Link>
    )
}

export default ProductCard;