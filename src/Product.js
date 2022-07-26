import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import {Link, Route, Routes, useLocation} from "react-router-dom";
import Checkout from "./Checkout";
import Home from "./Home";

function Product({ id, title, image, price, rating }) {

  let productTest = { id, title, image, price, rating }
  const [{ basket }, dispatch] = useStateValue();

  const location = useLocation();
  console.log(location)

  console.log('this is the basket ->', basket);

  const addToBasket = () => {
    // dispatch item into data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <Link to={"/ProductPage/" + id} >
          <img src={image} alt="" />
        </Link>

        <button onClick={addToBasket}>Add to cart</button>
      </div>
    </div>
  );
}

export default Product;
