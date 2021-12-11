import React from "react";
import { useParams } from "react-router-dom";

const CategoryView = () => {
    const {category} = useParams();
    console.log(category)
    return (
        <div>
            {category} Page
        </div>
    )
}

export default CategoryView;