import React from "react";
import PropTypes from "prop-types";

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img className="book-card__img" src={book.cover} />
      <label className="book-card__name"> {book.title} </label>
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.object.isRequired,
};

export default BookCard;
