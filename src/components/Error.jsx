import "../styles/error.css";
import errorImg from "../assets/photos/error/pizza-broken.png";
import { Link } from "react-router-dom";
import { BUTTONS, TEXTS } from "../data/Data";

const Error = () => {
  return (
    <div className="error-section">
      <h3>{TEXTS.ERROR_SOMETHING_WRONG}</h3>
      <div className="error-img-sec">
        <img src={errorImg} />
      </div>
      <Link to="/">
        <button>{BUTTONS.BACK_TO_HOME}</button>
      </Link>
    </div>
  );
};

export default Error;
