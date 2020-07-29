import React from 'react';
import BookPreviewContainer from '../components/BookPreview/BookPreviewContainer'
import HeaderMain from '../components/Header/HeaderMain';



const BookPreviewPage = ( {book} ) => {
  return (
    <>
      <HeaderMain />
      <BookPreviewContainer book={book} />
      <footer className="footer">
       &copy; {new Date().getFullYear()}, Thinknetica
      </footer>
    </>
  );
}

export default BookPreviewPage

