import React,{ useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

const InputPrice = ({userPay, changePrice}) => {
  const [ price, setPrice ] = useState(userPay);
  useEffect(() => {
    setPrice(userPay)
  },[userPay]);

  const inputPrice = useRef(null);

  useEffect(() => {
    inputPrice.current.focus();
  },[]);
  return(
    <input
      ref={inputPrice}
      name="user-price"
      value={price}
      onChange={e => setPrice(e.target.value)}
      onBlur={changePrice}
    ></input>
  );
}


InputPrice.propTypes = {
  userPay: PropTypes.number.isRequired,
  changePrice: PropTypes.func.isRequired
};

export default InputPrice
