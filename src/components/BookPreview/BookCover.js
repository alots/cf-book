import React from 'react';

const BookCover = ({cover}) => {
  return (
    <div className="book-cover">
      <img className="book-cover-image" src={cover} />
    </div>
  );
}

export default BookCover
