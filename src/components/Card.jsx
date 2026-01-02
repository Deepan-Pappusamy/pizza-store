import { useContext } from "react";
import "../styles/card.css";
import { PizzaContext } from "../context/PizzaContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BUTTONS, ICONS, SYMBOLS, TEXTS } from "../data/Data";

const Card = ({ item }) => {
  const { cart, dispatch } = useContext(PizzaContext);

  // check if this item is already in cart
  const inCartItem = cart.find((c) => c.id === item.id);

  const truncateText = (text, maxLength) => {
    if (!text) return "";
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  return (
    <div className="card" key={item.id}>
      <div className="badge">
        {item.offerPercentage} {TEXTS.CARD_OFF}
      </div>

      <div className="image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="details">
        <div className="pizza-info">
          <h3 className="name">{item.name}</h3>
          <div className={`type ${item.type}`}>
            <i>
              <FontAwesomeIcon icon={ICONS.CIRCLE} />
            </i>
          </div>
        </div>

        <p className="description full">{item.description}</p>
      </div>
      <div className="pricing">
        <span className="actual-price">
          {SYMBOLS.RUPEES} {item.actualPrice}
        </span>
        <span className="offer-price">
          {SYMBOLS.RUPEES} {item.offerPrice}
        </span>
      </div>
      <div className="card-footer">
        <div className="rating">⭐ {item.starRatings}</div>

        {inCartItem ? (
          <button className="add-to-cart-btn" disabled>
            {BUTTONS.ALREADY_IN_CART}
          </button>
        ) : (
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            {BUTTONS.ADD_TO_CART}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
