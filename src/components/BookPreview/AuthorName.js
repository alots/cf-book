import React from 'react'


const AuthorName = ({visibleAuthors}) => {
  const delimiter = ', ';
  return (
    <div className="author-name-list">
      {
          visibleAuthors.map((author, idx) => (
            <div className="author-name" key={author.ID} >
                {author.name} {(idx < visibleAuthors.length - 1) && delimiter}
            </div>
          ))
      } 
    </div>

  );
}

export default AuthorName
