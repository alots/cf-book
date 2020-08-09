import React,{useState} from 'react'
import PropTypes from 'prop-types'

const AuthorEarns = ({suggestedPrice, minPrice}) => {
  const [userPay, setUserPay] = useState((suggestedPrice).toFixed(2))
  const [authorEarns,setAuthorEarns] = useState((userPay - userPay*0.1).toFixed(2));
  const comission = (pay) => {
    return (
      (pay*0.1).toFixed(2)
    );
  }

  const changePrice = (e) => {
      const newPay = e.target.value;
      const newAuthorEarns = (newPay - comission(newPay)).toFixed(2);
      setAuthorEarns(newAuthorEarns);
      setUserPay(newPay);
  }

  return(
    <div className="author-earns">
        <label> YOU PAY</label>
        <div className="slidecontainer">
          <input
            name="user-price" 
            type="range" 
            min={minPrice} max="100" 
            value={userPay} 
            className="slider"  
            onChange={changePrice}
          />
          <label className="price-lb"> ${userPay} </label>
        </div>
        <label>AUTHOR EARNS</label>
        <div className="slidecontainer">
        <input
            name="author-earns" 
            type="range" 
            min={minPrice - comission(minPrice)} max="100" 
            value={authorEarns} 
            className="slider"  
            onChange={changePrice}
          />
        <label className="price-lb"> ${authorEarns} </label>
        </div>
        <label className="price-lb">YOU PAY (us$)</label>
        <div>
          <input 
              name="user-price"
              value={userPay}  
              onChange={changePrice} 
            ></input>   
        </div>  
    </div>                   
  );
}

AuthorEarns.propTypes = {
  suggestedPrice: PropTypes.number.isRequired,
  minPrice: PropTypes.number.isRequired
};

export default AuthorEarns
