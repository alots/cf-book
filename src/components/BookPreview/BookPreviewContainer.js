import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import AuthorСard from './AuthorCard';
import BookCard from './BookCard';
import AddBook from './AddBook';
import BookPrice from './BookPrice';
import BookDescription from './BookDescription';

const BookPreviewContainer = ({book}) => {
  return (
    <Container>
      <Row>
        <Col className="author-card">
          <AuthorСard author={book.author} title={book.title} /> 
        </Col>
        <Col>   
          <BookCard book={book} />
        </Col>
        <Col className="book-price">
          <BookPrice minPrice={book.minPrice} suggestedPrice={book.suggestedPrice} />
          <AddBook />
        </Col>
      </Row>
      <Row>
        <Col className="book-about">
          <div className="book-about-title">
             About the book: 
          </div>
          <div className="book-about-text">
            <BookDescription description={book.description} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default BookPreviewContainer
