import React from "react";
import PropTypes from "prop-types";

const AuthorName = ({ visibleAuthors }) => {
  const delimiter = ", ";
  return (
    <div className="author-name__list">
      {visibleAuthors.map((author, idx) => (
        <div className="author-name" key={author.id}>
          {author.name}
          {idx < visibleAuthors.length - 1 && delimiter}
        </div>
      ))}
    </div>
  );
};

AuthorName.propTypes = {
  visibleAuthors: PropTypes.arrayOf(PropTypes.object),
};

export default AuthorName;
