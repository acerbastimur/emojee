import React from "react";
 import "./headAd.css";
import Ad from "../ad";

const HeadAd = () => {
  return (
    <div className="headAd_container">
      <h2 className="headAd__text">
        Choose your emoji, adjust the font size, show your mood But first, a
        word from our sponsors:
      </h2>
      <div className="headAd__ad-container">
        <Ad />
      </div>
    </div>
  );
};

export default HeadAd;
