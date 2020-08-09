import React from 'react'
import PropTypes from 'prop-types';
import {Card} from 'reactstrap'

const SimilarBookCard = ({book, changeSimilarBooks}) => {
  return (
    <Card className="book-card">
      <a className="close-btn" onClick={() => changeSimilarBooks(book.id)}/>
      <img className="book-card-image"  src={book.cover} alt="Card image cap"/>
      <div className="book-card-title"> {book.title} </div>
        {
          book.authors.map((author) =>
            <a key={author.id} href="#" className="book-card-authors"> {author.name} </a> 
          )
        }    
    </Card>
  );
}

SimilarBookCard.propTypes = {
  book: PropTypes.object.isRequired,
  changeSimilarBooks: PropTypes.func.isRequired
}

export default React.memo(SimilarBookCard)
