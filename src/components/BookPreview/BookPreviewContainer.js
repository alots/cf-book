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
          <AuthorСard author={book.author} /> 
        </div>
        <div className="col-lg">   
          <BookCard book={book} />
        </div>
        <div className="col-lg">
          <BookPrice minPrice={book.minPrice} suggestedPrice={book.suggestedPrice} />
          <AddBook />
        </div>
      </div>
      <div className="alert alert-success">

          <div> About the book: </div>
          <BookDescription description={book.description} />
       
        
      </div>
    </div>
  );
}

export default BookPreviewContainer