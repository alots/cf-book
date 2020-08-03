import React from 'react';
import BookPreviewContainer from '../BookPreview/BookPreviewContainer'
import books from '~/src/books.json'



const BookPreviewPage = () => {
  return (
    <>
      <BookPreviewContainer book={books[0]}/> 
    </>
  );
}

export default BookPreviewPage

