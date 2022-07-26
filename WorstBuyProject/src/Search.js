import React from "react"
import Product from "./Product";
import ProductList from "./ProductsList";

export default function Search(props) {

    const search = ProductList.map((item) => {
        if (item.category == props.name) {
            return (<div className="filterList"><Product {...item} /></div>)
        }
    })

    return (
        <>{search}</>
    )
} 