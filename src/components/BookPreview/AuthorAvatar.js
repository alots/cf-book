import React from "react";
import PropTypes from "prop-types";

const AuthorAvatar = ({ visibleAuthors }) => {
  return (
    <div className="author-avatar__list">
      {visibleAuthors.map((author) => (
        <div key={author.id}>
          <img className="author-avatar__img" src={author.avatar} />
        </div>
      ))}
    </div>
  );
};

AuthorAvatar.propTypes = {
  visibleAuthors: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AuthorAvatar;
