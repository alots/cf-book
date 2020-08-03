import React from 'react';
import UserInfo from '../UserPreview/UserInfo'
import HeaderMainLogo from './HeaderMainLogo';

const HeaderMain = () => {
  return(
    <div className="header-main">
      <HeaderMainLogo />
      <UserInfo />
    </div>  
  );
}

export default HeaderMain
