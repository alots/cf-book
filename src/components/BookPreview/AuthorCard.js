import React, {useState} from 'react';
import { Button } from 'reactstrap';
import AuthorAvatar from './AuthorAvatar'
import AuthorName from './AuthorName'
import BookInfo from './BookInfo'
import BookName from './BookName'

const AuthorСard = ({authors, title, shortDescription, showAuthors, showClick}) => {
    return (
      <div className="author-card">
        <div className="author-card-title">
          <BookName title={title} />
        </div>
        <div className="author-title-info">
          <AuthorAvatar authors={authors} showAuthors={showAuthors}/>
          <AuthorName authors={authors} showAuthors={showAuthors}/> 
          <Button color="link" onClick={showClick}> {showAuthors ? `Показать всех авторов (${authors.length}) ` : `Скрыть`} </Button>
        </div>
        <div className="author-information">
           <BookInfo shortDescription={shortDescription}/>  
        </div>
      </div>   
    );
}

export default AuthorСard
