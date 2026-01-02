import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PizzaContext } from "../context/PizzaContext";
import "../styles/cart.css";
import { BUTTONS, SYMBOLS, TEXTS } from "../data/Data";

const Cart = () => {
  const { cart, totalPrice, dispatch } = useContext(PizzaContext);

  console.log(cart);

  if (cart.length === 0) {
    return (
      <div className="cart-section">
        <div className="cart-empty">
          <h3>{TEXTS.CART_EMPTY}</h3>
          <Link to="/store">
            <button>{BUTTONS.GO_TO_STORE}</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-section">
      {/* 👇 show total price */}
      <div className="cart-header">
        <h3 className="cart-total">
          {TEXTS.CART_TOTAL} {totalPrice}
        </h3>
        <button onClick={() => dispatch({ type: "CLEAR_CART" })}>
          {BUTTONS.CLEAR_ALL}
        </button>
      </div>

      {cart.map((item) => (
        <div key={item.id} className="cart-card">
          {/* Image */}
          <div className="cart-img">
            <img src={item.image} alt={item.name} />
          </div>

          {/* Item details */}
          <div className="cart-details">
            <h4>{item.name}</h4>
            <p>
              {SYMBOLS.RUPEES} {item.offerPrice}
            </p>
            {/* 👇 optional: per-item subtotal */}
            <p>
              {TEXTS.CART_SUB_TOTAL} {item.offerPrice * item.quantity}
            </p>
          </div>

          {/* Quantity controls */}
          <div className="cart-qty">
            <button
              onClick={() =>
                dispatch({ type: "DECREASE_QTY", payload: item.id })
              }
              disabled={item.quantity <= 1}
            >
              {SYMBOLS.DECREASE}
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={() =>
                dispatch({ type: "INCREASE_QTY", payload: item.id })
              }
            >
              {SYMBOLS.INCREASE}
            </button>
          </div>

          {/* Remove button */}
          <button
            className="remove-btn"
            onClick={() =>
              dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
            }
          >
            {BUTTONS.REMOVE}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
