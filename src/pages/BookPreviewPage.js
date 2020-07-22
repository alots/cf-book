import React from 'react';
import BookPreviewContainer from '../components/BookPreview/BookPreviewContainer'



const BookPreviewPage = ( {book} ) => {
  return (
    <BookPreviewContainer book={book} />
  );
}

export default BookPreviewPage

