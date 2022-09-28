import React from "react";
import "./Products.css";
import Product from "../Product/Product";

const Products = ({ products, addToCart }) => {
  return (
    <div className="product-container">
      {products.map((product) => (
        <Product
          product={product}
          key={product.id}
          addToCart={addToCart}
        ></Product>
      ))}
    </div>
  );
};

export default Products;
