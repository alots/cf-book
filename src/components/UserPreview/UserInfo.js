import React from 'react'
import AuthContext from './AuthContext'

const UserInfo = () => (
      <AuthContext.Consumer>
        {
          (user) => (
             <div className="user-info">
              <img className="user-avatar" src={user.currentUser.avatarUrl} />
              <div className="user-name">
                {user.currentUser.firstName}
              </div>
            </div> 
          )
        }
      </AuthContext.Consumer>  
);

export default UserInfo
