import React from 'react'
import PropTypes from 'prop-types';
import {Card, CardImg, CardTitle, CardSubtitle, Button} from 'reactstrap'

const BookCard = ({book, changeSimilarBooks}) => {
  return (
    <Card className="book-card">
      <a className="close" onClick={changeSimilarBooks}/>
      <img className="book-card-image"  src={book.cover} alt="Card image cap"/>
      <div className="book-card-title"> {book.title} </div>
        {
          book.authors.map((author) =>
            <a href="#" className="book-card-authors"> {author.name} </a> 
          )
        }
      
    </Card>
  );
}



export default BookCard
