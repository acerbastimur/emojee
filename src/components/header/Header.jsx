import React from "react";
import "./header.css";
const Header = () => {
  return (
    <header className="header">
      <span className="header__logo">( ° ͜ʖ °)</span>
      <div className="header__text">
        <h1 className="header__text__brand-name">emojee</h1>
        <h4 className="header__text__brand-slogan">
          own you a new emoji, today!
        </h4>
      </div>
    </header>
  );
};

export default Header;
