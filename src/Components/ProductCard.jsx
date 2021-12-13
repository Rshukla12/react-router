import React from "react";

const ProductCard = ( { title, price, brand, img, category } ) => {
    return (
        <div>
            <img src={img} alt={title} />
            <div>{title}</div>
            <div>{price}</div>
            <div>{brand}</div>
            <div>{category}</div>
        </div>
    )
}

export default ProductCard;