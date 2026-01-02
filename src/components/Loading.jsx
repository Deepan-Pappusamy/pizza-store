import React from "react";
import "../styles/loading.css";
import { TEXTS } from "../data/Data";

const Loading = () => {
  return (
    <div className="loading-section">
      <div className="loader"></div>
      <p>{TEXTS.FETCHING_DATA}</p>
    </div>
  );
};

export default Loading;
