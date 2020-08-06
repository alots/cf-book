import React from 'react';
import PropTypes from 'prop-types';

const BookProgress = ({ progressInPercent }) => {
  return (
    <div>
      This book is {progressInPercent}% complete
    </div>
  );
}

BookProgress.propTypes = {
  progressInPercent: PropTypes.number.isRequired
};

export default BookProgress
