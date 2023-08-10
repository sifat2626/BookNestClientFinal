import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { CartState } from "../../context/CartContext";


const CartItem = ({ book }) => {
  const { state, dispatch } = CartState();
const removeItem = () =>
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: book,
    });
  return (
    <div>
      <div className="product">
        <div className="product-cart-details">
          <h4 className="product-title">
            <Link>{book?.title}</Link>
          </h4>
          <span className="cart-product-info">
            <span className="cart-product-qty">{book.qty}</span>x {book.price}{" "}
            tk
          </span>
        </div>
        <div className="product-image-container">
          <Link className="product-image">
            <img src={book.photo} alt={book.title} />
          </Link>
        </div>
        <p
          className="btn-remove"
          title="Remove Product"
          onClick={removeItem}
        >
          <i className="fa fa-trash"/>
        </p>
      </div>
    </div>
  );
};

export default CartItem;
