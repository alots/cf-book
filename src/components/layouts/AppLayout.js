import React from "react";
import HeaderMain from "./Header/HeaderMain";
import PropTypes from "prop-types";

const AppLayout = ({ children }) => {
  return (
    <div className="app">
      <HeaderMain />

      <div className="app-container">{children}</div>

      <footer className="app-footer">
        &copy; {new Date().getFullYear()}, Thinknetica
      </footer>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
