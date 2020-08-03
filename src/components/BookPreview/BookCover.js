import React from 'react';
import PropTypes from 'prop-types';

const BookCover = ({cover}) => {
  return (
    <div className="book-cover">
      <img className="book-cover-image" src={cover} />
    </div>
  );
}

BookCover.propTypes = {
  cover: PropTypes.string.isRequired
};

export default BookCover
