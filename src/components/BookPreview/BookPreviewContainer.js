import React,{useState} from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import AuthorСard from './AuthorCard';
import BookCard from './BookCard';
import AddBook from './AddBook';
import BookPrice from './BookPrice';
import BookDescription from './BookDescription';
import settings from '~/src/components/config/settings.js';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect, withRouter, Link } from "react-router-dom"
import UserQuestionPage from '../pages/UserQuestionPage'


const BookPreviewContainer = ({book}) => {
  const [countSubscribers, setCountSubscribers] = useState(0);
  const handleClick = () => {
    setCountSubscribers(countSubscribers + 1);
  }
  return (
    <Container>
      <Row className="row-1">
        <Col className="author-card">
          <AuthorСard authors={book.authors} title={book.title} shortDescription={book.shortDescription} /> 
        </Col>
        <Col className="book-cover">   
          <BookCard book={book} />
        </Col>
        <Col className="book-price">
          <BookPrice minPrice={book.minPrice} suggestedPrice={book.suggestedPrice} />
          <AddBook handleClick={handleClick}/>
          {
            (countSubscribers > settings.popularBookSubscribersCount) ? <div className="subscribers"> Книга очень популярна({countSubscribers} подписчиков) </div> : null

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
          <Link to="/userquestion">
            <div>
              <label>Обратная связь: </label>
              <Button color="link">Задать вопрос</Button>
            </div>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

BookPreviewContainer.propTypes = {
  book: PropTypes.object.isRequired
};

export default BookPreviewContainer
