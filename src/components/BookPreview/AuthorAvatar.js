import React from 'react'


const AuthorAvatar = ({visibleAuthors}) => {
  return (
    <div className="author-avatar-list">
      {
        visibleAuthors.map((author) => (
          <div className="author-avatar" key={author.ID} >
              <img className="author-avatar" src={author.avatar} /> 
          </div>
        ))
      }
    </div>
  );
}

export default AuthorAvatar
