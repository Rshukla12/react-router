import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../Components/ProductCard";

const Home = () => {
    const [data, setData] = useState([]);
    
    const getProducts = () => {
       return axios.get( `http://localhost:3000/products` );
    }

    const fetchProducts = async ( ) => {
        try {
            const res = await getProducts();
            setData(res.data);
        } catch ( err ) {
            console.log( err );
        }
    }

    useEffect( () => {
        fetchProducts();
    }, [])
    return (
        <div>
            Home Page
            {
                data.map( pro => (
                    <ProductCard key = {pro.id}
                        title={pro.title}
                        brand={pro.brand}
                        img={pro.image}
                        category={pro.category}
                        price={pro.price}
                    />
                ))
            }
        </div>
    )
}

export default Home;