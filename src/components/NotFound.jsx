import React from "react";
import { Link } from "react-router-dom";
import { BUTTONS } from "../data/Data";
import "../styles/notFound.css";
import notFound from "../assets/photos/notfound/not-found.png";

const NotFound = () => {
  return (
    <div className="notfound-section">
      <h3>Looks like we ran out of pizza here…</h3>
      <img src={notFound} />
      <Link to="/">
        <button>{BUTTONS.BACK_TO_HOME}</button>
      </Link>
    </div>
  );
};

export default NotFound;
