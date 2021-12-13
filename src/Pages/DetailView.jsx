import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../Components/ProductCard";

const DetailView = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    
    const getProducts = ( { prodId } ) => {
       return axios.get( `http://localhost:3000/products/${prodId}` );
    }

    const fetchProducts = async ( { prodId } ) => {
        try {
            const res = await getProducts({prodId});
            setData(res.data);
        } catch ( err ) {
            console.log( err );
        }
    }

    const addToCart = () => {
        // will handle later
    }

    useEffect( () => {
        fetchProducts( { prodId: id } );
    }, [ id ])

    return (
        <div>
            {
                data && (
                        <ProductCard
                            title={data.title}
                            brand={data.brand}
                            img={data.image}
                            category={data.category}
                            price={data.price}
                            id={data.id}
                            info={"yes"}
                        />
                )
            }
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default DetailView;