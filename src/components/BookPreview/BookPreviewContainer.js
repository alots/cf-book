import React,{useState} from 'react';
import { Container, Row, Col } from 'reactstrap';
import AuthorСard from './AuthorCard';
import BookCard from './BookCard';
import AddBook from './AddBook';
import BookPrice from './BookPrice';
import BookDescription from './BookDescription';

const COUNT_SUBSCRIBERS_POPULAR = 5;

const BookPreviewContainer = ({book}) => {
  const [countSubscribers, setCountSubscribers] = useState(0);
  const [showAuthors, setShowAuthors] = useState(false);
  const handleClick = () => {
    setCountSubscribers(countSubscribers + 1);
  }
  const showClick = () => {
    setShowAuthors(!showAuthors)
  }

  return (
    <Container>
      <Row>
        <Col className="author-card">
          <AuthorСard authors={book.authors} title={book.title} shortDescription={book.shortDescription} showAuthors={showAuthors} showClick={showClick}/> 
        </Col>
        <Col className="book-cover">   
          <BookCard book={book} />
        </Col>
        <Col className="book-price">
          <BookPrice minPrice={book.minPrice} suggestedPrice={book.suggestedPrice} />
          <AddBook handleClick={handleClick}/>
          {
            (countSubscribers > COUNT_SUBSCRIBERS_POPULAR) ? <div className="subscribers"> Книга очень популярна({countSubscribers} подписчиков) </div> : null

          }
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
