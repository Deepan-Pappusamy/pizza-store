import "../styles/customizePizza.css";
import { Link } from "react-router-dom";
import customPizza from "../assets/photos/customize/customized-pizza.jpg";
import { BUTTONS, TEXTS, TITLES } from "../data/Data";

const CustomizePizza = () => {
  return (
    <div className="customize-section">
      <div className="customize-visual">
        <img src={customPizza} alt="Customized Pizza" />
      </div>
      <div className="customize-content">
        <h2>{TITLES.CUSTOMIZATION_START}</h2>
        <ul>
          <li>{TEXTS.CUSTOMIZATION_CRUST}</li>
          <li>{TEXTS.CUSTOMIZATION_SIZE}</li>
          <li>{TEXTS.CUSTOMIZATION_SPICE}</li>
          <li>{TEXTS.CUSTOMIZATION_TOPPINGS}</li>
          <li>{TEXTS.CUSTOMIZATION_CHEESE}</li>
        </ul>
        <Link to="/pizza_customize">
          <button className="pizza-btn">{BUTTONS.BUILD_MY_PIZZA}</button>
        </Link>
      </div>
    </div>
  );
};

export default CustomizePizza;
