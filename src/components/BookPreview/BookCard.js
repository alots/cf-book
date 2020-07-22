import React from 'react'
import BookName from './BookName'
import BookCover from './BookCover'
import BookDescription from './BookDescription'
import BookProgress from './BookProgress'

const BookCard = ({book}) => {
  return (
    <div>
      <BookName name={book.name} />
      <BookCover cover={book.cover} />
      <BookProgress progressInPercent={book.progressInPercent} />
    </div>
  );
}

export default BookCard