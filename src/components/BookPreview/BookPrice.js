import React from "react";
import PropTypes from "prop-types";

const BookPrice = ({ minPrice, suggestedPrice }) => {
  return (
      <div className="price-container">
        <div className="price">
          <div> ${minPrice} </div>
          <div> MINIMUM PRICE </div>
        </div>
        <div className="price">
          <div> ${suggestedPrice} </div>
          <div> SUGGESTEDPRICE </div>
        </div>
      </div>
  );
};

BookPrice.propTypes = {
  minPrice: PropTypes.number.isRequired,
  suggestedPrice: PropTypes.number.isRequired,
};

export default BookPrice;
