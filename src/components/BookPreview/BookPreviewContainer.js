import React from 'react';
import AuthorСard from './AuthorCard';
import BookCard from './BookCard';
import AddBook from './AddBook';
import BookPrice from './BookPrice';
import BookDescription from './BookDescription';

const BookPreviewContainer = ({book}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="d-flex col-lg">
          <AuthorСard author={book.author} title={book.title} /> 
        </div>
        <div className="col-lg">   
          <BookCard book={book} />
        </div>
        <div className="col-lg-3">
          <BookPrice minPrice={book.minPrice} suggestedPrice={book.suggestedPrice} />
          <AddBook />
        </div>
      </div>
      <div className="book-about">

          <div className="book-about-title">
             About the book: 
          </div>
          <div className="book-about-text">
            <BookDescription description={book.description} />
          </div>
      </div>
    </div>
  );
}

export default BookPreviewContainer
