import React from 'react'

const AuthorName = ({visibleAuthors}) => {
  return (
    <div className="author-name-list">
      {
          visibleAuthors.map((author) => (
            <div className="author-name" key={author.ID} >
              {`${author.name}, `}
            </div>
          ))
      } 
    </div>

  );
}

export default AuthorName
