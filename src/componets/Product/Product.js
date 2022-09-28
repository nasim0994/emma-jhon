import React from "react";
import "./Product.css";

const Product = ({ product, addToCart }) => {
  const { img, name, price, seller } = product;

  return (
    <div>
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />

        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Price: ${price}</p>
          <p>Manufacturer: {seller}</p>

          {/* Add button */}
          <button
            className="btn btn-warning w-100"
            onClick={() => addToCart(product)}
          >
            <i className="fas fa-cart-plus"></i> Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
