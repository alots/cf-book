import React from 'react';
import PropTypes from 'prop-types';

const BookDescription = ({ description }) => {
  return (
    <div>
      {description}
    </div>
  );
}

BookDescription.propTypes = {
  description: PropTypes.string.isRequired
};

export default BookDescription
