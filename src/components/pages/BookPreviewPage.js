import React from 'react';
import BookPreviewContainer from '../BookPreview/BookPreviewContainer'
import books from '~/src/books.json'



const BookPreviewPage = ({book}) => {
  return (
    <>
      <BookPreviewContainer book={book}/> 
    </>
  );
}

export default BookPreviewPage

