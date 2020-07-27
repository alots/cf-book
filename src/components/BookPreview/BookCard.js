import React from 'react'
import BookName from './BookName'
import BookCover from './BookCover'
import BookProgress from './BookProgress'

const BookCard = ({book}) => {
  return (
    <div className="book-info">
      <div>
        <BookCover cover={book.cover} />
      </div>
      <div>
        <BookProgress progressInPercent={book.progressInPercent} />
      </div>
    </div>
  );
}

export default BookCard
