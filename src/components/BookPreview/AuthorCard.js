import React from 'react';
import AuthorAvatar from './AuthorAvatar'
import AuthorName from './AuthorName'
import AuthorInfo from './AuthorInfo'

const AuthorСard = ({author}) => {
    return (
      <div className="author-card">
        <AuthorAvatar avatar={author.avatar}/>
        <AuthorName name={author.name}/>
        <AuthorInfo authorInformation={author.authorInformation}/>
      </div>   
    );
}

export default AuthorСard