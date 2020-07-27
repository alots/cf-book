import React from 'react';
import AuthorAvatar from './AuthorAvatar'
import AuthorName from './AuthorName'
import AuthorInfo from './AuthorInfo'
import BookName from './BookName'

const AuthorСard = ({author, title}) => {
    return (
      <div className="author-card">
        <div className="author-card-title">
          <BookName title={title} />
        </div>
        <div className="author-title-info">
          <AuthorAvatar avatar={author.avatar}/>
          <AuthorName name={author.name}/>
        </div>
        <div className="author-information">
          <AuthorInfo authorInformation={author.authorInformation}/>
        </div>
      </div>   
    );
}

export default AuthorСard
