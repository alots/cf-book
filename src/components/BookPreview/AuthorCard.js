import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import settings from '~/src/config/settings.js';
import AuthorAvatar from './AuthorAvatar'
import AuthorName from './AuthorName'
import BookInfo from './BookInfo'
import BookName from './BookName'


const AuthorСard = ({authors, title, shortDescription}) => {
  const [showAuthors, setShowAuthors] = useState(false);
  const showClick = () => {
    setShowAuthors(!showAuthors)
  }
  const visibleAuthorsCount = showAuthors ?   authors.length : settings.visibleAuthorsCount ;
  const visibleAuthors = authors.slice(0, visibleAuthorsCount);
  const showExpandButton = authors.length > settings.visibleAuthorsCount
  return (
      <div className="author-card">
        <div className="author-card-title">
          <BookName title={title} />
        </div>
        <div className="author-title-info">
          <AuthorAvatar visibleAuthors={visibleAuthors}/>
          <AuthorName visibleAuthors={visibleAuthors}/> 
          {
            (showExpandButton) && 
              <Button color="link" onClick={showClick}> 
                {showAuthors ?    `Скрыть` : `Показать всех авторов (${authors.length}) `}  
              </Button>
          }     
        </div>
        <div className="author-information">
           <BookInfo shortDescription={shortDescription}/>  
        </div>
      </div>   
    );
}

AuthorСard.propTypes = {
  authors: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired
};

export default AuthorСard
