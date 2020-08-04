import React from 'react';
import UserInfo from '~/src/components/UserPreview/UserInfo'
import HeaderMainLogo from './HeaderMainLogo';
import {Link} from 'react-router-dom'
import routes from '~/src/config/routes'

const HeaderMain = () => {
  return(
    <div className="header-main">
      <HeaderMainLogo />
      <Link to={routes.bookPreview()}> Просмотр книги </Link>
      <Link to={routes.userQuestion()}> Обратная связь </Link>
      <UserInfo />
    </div>  
  );
}

export default HeaderMain
