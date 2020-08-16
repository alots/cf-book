import React, { useState } from "react";
import PropTypes from "prop-types";
import { calcAuthorEarns } from "~/src/services/book-price-calculator";
import { formatMoney } from "~/src/utils/money-utils";
import InputPrice from "./InputPrice";

const PriceForm = ({ suggestedPrice, minPrice }) => {
  const [userPay, setUserPay] = useState(suggestedPrice);
  const [authorEarns, setAuthorEarns] = useState(
    calcAuthorEarns(suggestedPrice)
  );

  const changePrice = (e) => {
    const newPay = Math.max(minPrice, parseFloat(e.target.value || 0));
    const newAuthorEarns = calcAuthorEarns(newPay);
    setAuthorEarns(newAuthorEarns);
    setUserPay(newPay);
  };

  const minAuthorEarns = calcAuthorEarns(minPrice);
  const userPayLabel = formatMoney(userPay);
  const authorEarnsLabel = formatMoney(authorEarns);

  return (
    <div className="author-earns">
      <label> YOU PAY</label>
      <div className="slidecontainer">
        <input
          name="user-price"
          type="range"
          min={minPrice}
          max="100"
          value={userPay}
          className="slider"
          onChange={changePrice}
        />
        <label className="price-lb"> {userPayLabel} </label>
      </div>
      <label>AUTHOR EARNS</label>
      <div className="slidecontainer">
        <input
          name="author-earns"
          type="range"
          min={minAuthorEarns}
          max="100"
          value={authorEarns}
          className="slider"
          onChange={changePrice}
        />
        <label className="price-lb"> {authorEarnsLabel} </label>
      </div>
      <label className="price-lb">YOU PAY (us$)</label>
      <div>
        <InputPrice userPay={userPay} changePrice={changePrice}></InputPrice>
      </div>
    </div>
  );
};

PriceForm.propTypes = {
  suggestedPrice: PropTypes.number.isRequired,
  minPrice: PropTypes.number.isRequired,
};

export default PriceForm;
