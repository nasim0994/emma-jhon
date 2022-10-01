import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  let quantity = 0;
  let price = 0;
  let shipping = 0;

  for (const data of cart) {
    quantity = quantity + data.quantity;
    price = price + data.price * quantity;
    shipping = shipping + data.shipping;
  }

  let vat = parseFloat((price * 0.1).toFixed(2));
  let grandTotal = price + shipping + vat;

  const clearCart = () => {
    localStorage.clear("cart");
    window.location.reload(false);
  };

  const ReviewPageHandel = () => {
    alert("Page Upcoming");
  };

  return (
    <div className="cart-container">
      <h4 className="text-center text-warning">Order Summary</h4>

      <table>
        <tbody>
          <tr>
            <td className="pe-1">Selected Items</td>
            <td className="pe-3">:</td>
            <td>{quantity}</td>
          </tr>
          <tr>
            <td>Total Price</td>
            <td>:</td>
            <td>${price}</td>
          </tr>
          <tr>
            <td>Shipping cost</td>
            <td>:</td>
            <td>${shipping}</td>
          </tr>
          <tr className="border-1 border-bottom">
            <td>Vat</td>
            <td>:</td>
            <td>${vat}</td>
          </tr>
          <tr className="fw-semibold">
            <td>Grand Total</td>
            <td>:</td>
            <td>${grandTotal}</td>
          </tr>
        </tbody>
      </table>

      <button className="btn btn-danger mt-4" onClick={clearCart}>
        Clear Cart <i className="far fa-trash-alt"></i>
      </button>
      <button className="btn btn-warning" onClick={ReviewPageHandel}>
        Review Order <i className="fas fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default Cart;
