import React from "react";
import PropTypes from "prop-types";
import "./card.css";
import { returnFormattedTime, formatPrice } from "../../util";

const Card = ({ face = "", size = 12, price = 0.0, date = "" }) => {
  return (
    <div className="card">
      <div className="card__show-area">
        <span className="card__show-area_content" style={{ fontSize: size }}>
          {face}
        </span>
      </div>
      <div className="card__info">
        <div className="card__info_row">
          <div>
            <span className="card__info_text">Size:</span>
            <span className="card__info_value">{size}px</span>
          </div>
          <div>
            <span className="card__info_text">Price:</span>
            <span className="card__info_value">${formatPrice({ price })}</span>
          </div>
        </div>
        <div className="card__info_row">
          <div>
            <span className="card__info_text">{returnFormattedTime(date)}</span>
          </div>
          <div>
            <button className="card__info_buy-button">
              <span>Buy Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  content: PropTypes.string,
  size: PropTypes.number,
  price: PropTypes.number,
  date: PropTypes.string,
};
export default Card;
