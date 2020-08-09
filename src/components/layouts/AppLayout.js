import React from 'react'
import HeaderMain from './Header/HeaderMain';
import PropTypes from 'prop-types'

const AppLayout = ({children}) => {
  return (
    <div className="App">
      <HeaderMain />
 
      {children}
 
      <footer className="footer">
        &copy; {new Date().getFullYear()}, Thinknetica
      </footer>
    </div>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default AppLayout
