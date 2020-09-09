import React from "react";
import PropTypes from "prop-types";
import BookProgress from "./BookProgress";

const BookCover = ({ book }) => {
  return (
    <div className="book-cover">
      <img className="book-cover__img" src={book.cover} />
      <BookProgress progressInPercent={book.progressInPercent} />
    </div>
  );
};

BookCover.propTypes = {
  book: PropTypes.object.isRequired,
};

export default BookCover;
