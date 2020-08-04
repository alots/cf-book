import React from 'react'
import HeaderMain from './Header/HeaderMain';

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

export default AppLayout
