import React,{useState} from 'react'



const AuthorAvatar = ({authors, showAuthors}) => {
  const VISIBLE_AUTHORS_COUNT = 3;
  console.log(showAuthors);
  return (
    <div className="author-avatar-list">
      {
        showAuthors ? authors.filter((author) => author.ID <= VISIBLE_AUTHORS_COUNT).map((author) => (
          <div className="author-avatar" key={author.ID} >
              <img className="author-avatar" src={author.avatar} /> 
          </div>
          )) : authors.map((author) => (
            <div className="author-avatar" key={author.ID} >
              <img className="author-avatar" src={author.avatar} /> 
            </div>
          ))
      }
    </div>
  );
}

export default AuthorAvatar
