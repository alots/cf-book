import React from 'react'
import BookName from './BookName'
import BookCover from './BookCover'
import BookProgress from './BookProgress'
import PropTypes from 'prop-types';

const BookCard = ({book}) => {
  return (
    <div className="book-info">
      <BookCover cover={book.cover} />
      <BookProgress progressInPercent={book.progressInPercent} />
    </div>
  );
}

BookCard.propTypes = {
  book: PropTypes.object.isRequired
};

export default BookCard
