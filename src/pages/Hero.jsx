import "../styles/hero.css";
import { Link } from "react-router-dom";
import hero_img from "../assets/photos/hero/pizza-with-plate.jpg";
import onion_ring from "../assets/photos/hero/Onion-ring.png";
import tomato from "../assets/photos/hero/tomato_exploding.png";
import { BUTTONS, TEXTS, SYMBOLS } from "../data/Data";

const Hero = ({ onLoaded, onFail }) => {
  return (
    <div className="hero-section">
      <div className="hero_content">
        <div className="hero_textarea">
          <h1 className="hero-title">
            {TEXTS.HUNGRY}
            <span className="qes-span">{SYMBOLS.QUESTION_MARK}</span>
          </h1>
          <p className="hero-subtitle">{TEXTS.HUNGRY_SUBTEXT}</p>
        </div>
        <div className="hero_trust">
          <p>{TEXTS.HERO_TRUST}</p>
        </div>
        <div className="hero_action">
          <Link to="/store">
            <button className="order-now-btn">{BUTTONS.EXPLORE_PIZZA}</button>
          </Link>
        </div>
      </div>

      <div className="hero_visual">
        <img src={onion_ring} className="onion" />
        <img
          src={hero_img}
          className="hero-pizza"
          onLoad={onLoaded}
          onError={onFail}
        />
        <img src={tomato} className="tomato" />
      </div>
    </div>
  );
};

export default Hero;
