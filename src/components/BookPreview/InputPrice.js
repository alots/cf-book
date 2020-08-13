import React,{ useState, useEffect } from 'react';

const InputPrice = ({ userPay, changePrice}) => {
  const [ price, setPrice ] = useState(userPay);
  useEffect(() => {
    setPrice(userPay)
  },[userPay]);
  
  return(
    <input
      name="user-price"
      value={price}
      onChange={e => setPrice(e.target.value)}
      onBlur={changePrice}
    ></input>
  );
}

export default InputPrice
