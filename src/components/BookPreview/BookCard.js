import React from 'react'
import BookName from './BookName'
import BookCover from './BookCover'
import BookProgress from './BookProgress'

const BookCard = ({book}) => {
  return (
    <div className="book-info">
      <BookCover cover={book.cover} />
      <BookProgress progressInPercent={book.progressInPercent} />
    </div>
  );
}

export default BookCard
