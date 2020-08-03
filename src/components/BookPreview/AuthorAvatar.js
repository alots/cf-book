import React from 'react'
import PropTypes from 'prop-types';


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

AuthorAvatar.propTypes = {
  visibleAuthors: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default AuthorAvatar
