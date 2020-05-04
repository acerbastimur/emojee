import React from "react";
 import "./headAd.css";
import Ad from "../ad/Ad";

const HeadAd = () => {
  return (
    <>
      <h2 className="headAd__text">
        Choose your emoji, adjust the font size, show your mood But first, a
        word from our sponsors:
      </h2>
      <div className="heAd__ad-container">
        <Ad />
      </div>
    </>
  );
};

export default HeadAd;
