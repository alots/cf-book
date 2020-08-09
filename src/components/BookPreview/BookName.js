import React from 'react';
import PropTypes from 'prop-types';

const BookName = ({title}) => {
  return (
    <div > 
      {title} 
    </div>
  );
}

BookName.propTypes = {
  title: PropTypes.string
};

export default BookName
