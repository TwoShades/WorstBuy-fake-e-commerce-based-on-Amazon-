import React from "react"
import Product from "./Product";
import ProductList from "./ProductsList";
import {useState} from "react";

export default function Search (props) {

    const search = ProductList.map((item) => {
        if(item.category == props.name){
            return (<Product {...item} />)
        }})

    return (
        <>{search}</>
    )
}