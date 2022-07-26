import React from "react";
import "./Home.css";
import Product from "./Product";
import Filter from "./components/Filter";


function Home() {
  return (
    <div className="home">
      <div><Filter /></div>
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61BvxKSpy3L._SX3000_.jpg"
          alt=""
        />


        <div className="home__row">
          <Product
            id="1"
            title="iPhone 13"
            price={1999.99}
            rating={5}
            image='./ProductImages/iphone 13.PNG'
          />
          <Product
            id="2"
            title="iPhone 13 Pro"
            price={2499.99}
            rating={4}
            image='./ProductImages/iPhone 13 Pro.jpg'
          />
          <Product
            id="3"
            title="iPhone 12 Pro"
            price={1599.99}
            rating={3}
            image='./ProductImages/iphone-12-pro.jpg'
          /></div>
        <div className="home__row">
          <Product
            id="4"
            title="iPhone 12"
            price={1299.99}
            rating={5}
            image='./ProductImages/iphone-12.jpg'
          />
          <Product
            id="5"
            title="iPhone 11 Pro"
            price={899.99}
            rating={4}
            image='./ProductImages/iphone11-pro.jpg'
          />

          <Product
            id="6"
            title="iPhone 11 Pro Max"
            price={1099.99}
            rating={4}
            image='./ProductImages/iPhone 11 pro max.jpg'

          />
        </div>
        <div className="home__row">
          <Product
            id="7"
            title="iPhone 5000 Designer Pro Max"
            price={49999.99}
            rating={1}
            image='./ProductImages/iphone-designer.jpg'
          />

          <Product
            id="8"
            title="Samsung Note S20 Plus"
            price={2399.99}
            rating={3}
            image='./ProductImages/Samsung Note S20 Plus.jpg'
          />
          <Product
            id="9"
            title="Samsung Note S20"
            price={1999.99}
            rating={5}
            image='./ProductImages/Samsung Note S20.jpg'
          /></div>
        <div className="home__row">
          <Product
            id="10"
            title="Samsung Galaxy S22 Ultra"
            price={1699.99}
            rating={4}
            image='./ProductImages/Samsung Galaxy S22 Ultra.jpg'
          />

          <Product
            id="11"
            title="HP Envy 13"
            price={999.99}
            rating={5}
            image='./ProductImages/HP Envy 13.jpg'
          />
          <Product
            id="12"
            title="Lenovo ThinkPad X1 Yoga (Gen 6)"
            price={239.0}
            rating={4}
            image='./ProductImages/Lenovo ThinkPad X1 Yoga (Gen 6).jpg'
          />
        </div>
        <div className="home__row">
          <Product
            id="13"
            title="Apple MacBook Air M2"
            price={1999.99}
            rating={5}
            image='./ProductImages/Apple MacBook Air M2.jpg'
          />
          <Product
            id="14"
            title="Apple MacBook Pro M2"
            price={2499.99}
            rating={4}
            image='./ProductImages/Apple MacBook Pro M2.jpg'
          />

          <Product
            id="15"
            title="Microsoft Surface Laptop 4"
            price={1999.99}
            rating={3}
            image='./ProductImages/Microsoft Surface Laptop 4.jpg'
          /></div>
        <div className="home__row">
          <Product
            id="16"
            title="Acer Gaming Laptop"
            price={1899.99}
            rating={5}
            image='./ProductImages/Acer Gaming Laptop.jpg'
          />
          <Product
            id="17"
            title="MSI Gaming Laptop"
            price={1499.99}
            rating={4}
            image='./ProductImages/MSI Gaming Laptop.jpg'
          />

          <Product
            id="18"
            title="Asus Gaming Laptop"
            price={1299.99}
            rating={3}
            image='./ProductImages/Asus Gaming Laptop.jpg'
          /></div>
        <div className="home__row">
          <Product
            id="19"
            title="Samsung Chromebook 4"
            price={1999.99}
            rating={5}
            image='./ProductImages/Samsung Chromebook 4.jpg'
          />
          <Product
            id="20"
            title="Dell Inspiron 15"
            price={598.99}
            rating={4}
            image='./ProductImages/Dell Inspiron 15.jpg'
          />
          <Product
            id="21"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="22"
            title="Acer Chromebook Tab 10"
            price={1499.98}
            rating={4}
            image='./ProductImages/Acer Chromebook Tab 10.jpg'
          />
          <Product
            id="23"
            title="Apple iPad Air 4"
            price={3999.99}
            rating={3}
            image='./ProductImages/Apple iPad Air 4.jpg'
          />
          <Product
            id="24"
            title="Apple iPad Air 5"
            price={98.99}
            rating={5}
            image='./ProductImages/Apple iPad Air 5.jpg'
          /></div>
        <div className="home__row">
          <Product
            id="25"
            title="Apple iPad Pro 3rd Gen"
            price={1299.99}
            rating={4}
            image='./ProductImages/Apple iPad Pro 3rd Gen.jpg'
          />
          <Product
            id="26"
            title="Apple iPad Pro 4th Gen"
            price={1699.98}
            rating={4}
            image='./ProductImages/Apple iPad Pro 4th Gen.jpg'
          />
          <Product
            id="27"
            title="Samsung Galaxy Tab S5e"
            price={1499.98}
            rating={4}
            image='./ProductImages/Samsung Galaxy Tab S5e.jpg'
          />
        </div>
        <div className="home__row">
          <Product
            id="28"
            title="Samsung Galaxy Tab S4 Lite"
            price={999.98}
            rating={4}
            image='./ProductImages/Samsung Galaxy Tab S4 Lite.jpg'
          />
          <Product
            id="29"
            title="Nokia T10"
            price={849.99}
            rating={5}
            image='./ProductImages/Nokia_T10.jpeg'
          />
          <Product
            id="30"
            title="Nokia T9"
            price={749.99}
            rating={4}
            image='./ProductImages/Nokia T9.jpg'
          />
        </div>
      </div>
    </div>
  );
}

export default Home;