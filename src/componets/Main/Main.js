import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  addItemsToLocalStorage,
  getItemsToLC,
} from "../../utilities/localStorage";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";
import "./Main.css";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Get items local storge
  useEffect(() => {
    const cartValue = getItemsToLC();

    const localCart = [];
    for (const id in cartValue) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = cartValue[id];
        addedProduct.quantity = quantity;
        localCart.push(addedProduct);
      }
    }
    setCart(localCart);
  }, [products]);

  // Add cart items Handel:
  const addToCart = (selectedProduct) => {
    let newCart = [];
    const exists = cart.find((product) => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setCart(newCart);

    // Local Storage
    addItemsToLocalStorage(selectedProduct.id);
  };

  return (
    <div className="main-wrap container  ">
      <Products products={products} addToCart={addToCart}></Products>
      <Cart cart={cart}></Cart>
    </div>
  );
};

export default Main;
