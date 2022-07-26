import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import {Link, Route, Routes, useParams} from "react-router-dom";
import Product from "./Product";
import ProductList from "./ProductsList"
import {useLocation} from 'react-router-dom'
import ReactDOM from 'react-dom'
import {useState, useEffect} from 'react'

export default function ProductPage () {





    const location = useLocation()
    let loc = location.pathname.slice(13)





    const fine = ProductList.map((item) => {
            if (loc == item.id) {
                 return (
                     <>
                         <Product {...item} />
                         <div className="description">{item.description}</div>
                     </>

                 )
            }
        }
    )



    return(
        <>{fine}</>
    )


}