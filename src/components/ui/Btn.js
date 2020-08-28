import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";


const Btn = ({ onClick, children, btnClasses }) => {
  
  return (
    <Button outline color="secondary" className={btnClasses} onClick={onClick}>
      {children}
    </Button>
  );
};

Btn.propTypes = {
  onClick: PropTypes.func.isRequired,
  btnClasses: PropTypes.string.isRequired,
  children: PropTypes.string,
};

export default Btn;
