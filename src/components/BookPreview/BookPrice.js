import React from 'react';


const BookPrice = ({minPrice, suggestedPrice}) => {
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
}

export default BookPrice
