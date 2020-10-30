import React from "react";

const BookCard = ({ cover, title }) => {
  return (
    <div className="book-card">
      <img className="book-card__img" src={cover} />
      <label className="book-card__name"> {title} </label>
    </div>
  );
};

export default BookCard;
