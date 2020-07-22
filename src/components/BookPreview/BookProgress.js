import React from 'react';



const BookProgress = ({ progressInPercent }) => {
  return (
    <div>
      This book is {progressInPercent}% complete
    </div>
  );
}

export default BookProgress