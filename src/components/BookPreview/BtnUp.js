import React from "react";
import withBtnUp from "../../HOC/withBtnUp";
import PropTypes from "prop-types";
import { Button } from "reactstrap";

const BtnUp = ({ onClick, visible, children }) => {
  const btnClasses = visible ? "btn-up" : "hidden";
  return (
    <Button outline color="secondary" className={btnClasses} onClick={onClick}>
      {children}
    </Button>
  );
};

BtnUp.propTypes = {
  onClick: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  children: PropTypes.string,
};

export default withBtnUp(BtnUp, 300);
