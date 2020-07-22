import React from 'react';


const BookPrice = ({minPrice, suggestedPrice}) => {
  return (
    <div>
      <div>
        <div> ${minPrice} </div>
        <div> MINIMUM PRICE </div>
      </div>
      <div>
        <div> ${suggestedPrice} </div>
        <div> SUGGESTEDPRICE </div>
      </div>
    </div>
  );
}

export default BookPrice
