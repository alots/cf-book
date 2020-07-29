import React from 'react'

const AuthorName = ({authors, showAuthors}) => {
  const VISIBLE_AUTHORS_COUNT = 3;
  return (
    <div className="author-name-list">
      {
          showAuthors ? authors.filter((author) => author.ID <= VISIBLE_AUTHORS_COUNT).map((author) => (
            <div className="author-name" key={author.ID} >
              {`${author.name}, `}
            </div>
          )) : authors.map((author) => (
            <div className="author-name" key={author.ID} >
              {`${author.name}, `} 
            </div>
          ))
      } 
    </div>

  );
}

export default AuthorName
