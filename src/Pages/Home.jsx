import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../Components/ProductCard";
import Banner from "../Components/Banner";
import styles from "./Home.module.css";

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
        <div className={styles.home} >
            <Banner />
            <div className={styles.products}>
                {
                    data.map( pro => (
                        <ProductCard key = {pro.id}
                            title={pro.title}
                            img={pro.image}
                            price={pro.price}
                            id={pro.id}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Home;