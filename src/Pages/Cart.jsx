import React, { useState, useContext } from "react";
import { shopContext } from "../Context/shopContext";
import "./Cart.css";
import Footer from "../Components/Footer/Footer";

const Cart = () => {
  const [value, setValue] = useState(0);
  const { cart, removeItem } = useContext(shopContext);

  const decrementValue = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  return (
    <>
      <div className="cart-main">
        {cart.map((product) => (
          <h4
            key={product.id}
            style={{
              color: "black",
              textAlign: "center",
              paddingTop: "20px",
              paddingRight: "20px",
              alignItems: "center",
              fontSize:"20px",
            }}
          >
            {product.name}
            {product.price}
            <img
              src={product.image}
              className="cart-image"
              alt={product.name}
            />

            <div>
              <button onClick={decrementValue} style={{width:"20px",fontSize:"15px"}}>-</button>
              <span style={{fontSize:"18px",padding:"5px,5px,0px,5px"}}>{value}</span>
              <button onClick={() => setValue(value + 1)} style={{width:"20px",fontSize:"15px"}}>+</button>
            </div>
            <button className="remove" onClick={() => removeItem(product.id)}>
              remove
            </button>
          </h4>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Cart;