import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../Components/ProductCard";

const CategoryView = () => {
    const {category} = useParams();
    const [data, setData] = useState([]);
    
    const getProducts = ( { cat } ) => {
       return axios.get( "http://localhost:5000/products" , {
            params: {
                category: cat
            }
        });
    }

    const fetchProducts = async ( { cat } ) => {
        try {
            const res = await getProducts({cat});
            setData(res.data);
        } catch ( err ) {
            console.log( err );
        }
    }

    useEffect( () => {
        let cat = category.slice(0, category.length-1 );
        fetchProducts( { cat } );
    }, [ category ])

    return (
        <div>
            <h1>{category}</h1>
            <div style={{display:"flex", gap: "1%", flexWrap: "wrap"}}>
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

export default CategoryView;