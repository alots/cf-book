import React,{useContext} from "react";
import AuthContext from "../UserPreview/AuthContext"

const UserInfo = () => {

const user = useContext(AuthContext);
 
  return (
    <div className="user-info">
      <img className="user-avatar" src={user.currentUser.avatarUrl} />
      <div className="user-name">{user.currentUser.firstName}</div>
    </div>
  );
}

export default UserInfo;
