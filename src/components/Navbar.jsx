import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DeeLogo from "../assets/photos/logo/dee_bee_food_logo.png";
import "../styles/navbar.css";
import { PizzaContext } from "../context/PizzaContext";
import { useContext } from "react";
import { ICONS } from "../data/Data";

const Navbar = () => {
  const { totalItems } = useContext(PizzaContext);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={DeeLogo} alt="Logo" />
        </Link>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/store">
            <FontAwesomeIcon icon={ICONS.STORE} />
          </Link>
        </li>

        <li>
          <Link to="/cart">
            <FontAwesomeIcon icon={ICONS.CART} />
            {totalItems !== 0 && (
              <span className="cart-count">({totalItems})</span>
            )}
          </Link>
        </li>

        <li>
          <Link to="/profile">
            <FontAwesomeIcon icon={ICONS.USER} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
