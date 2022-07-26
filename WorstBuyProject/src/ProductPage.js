import React from "react";
import "./Product.css";
import Product from "./Product";
import ProductList from "./ProductsList"
import { useLocation } from 'react-router-dom'
import './ProductsList.css'

export default function ProductPage() {



    const location = useLocation()
    let loc = location.pathname.slice(13)

    const fine = ProductList.map((item) => {
        if (loc == item.id) {
            return (
                <div className="prodPage">
                    <Product {...item} />
                    <div className="description">{item.description}</div>
                </div>

            )
        }
    }
    )

    return (
        <>{fine}</>
    )
} 