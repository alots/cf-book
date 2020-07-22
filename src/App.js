import React from 'react'
import BookPreviewPage from './pages/BookPreviewPage';

const App = ({book}) => {
    return(
      <BookPreviewPage book={book} /> 
    );
}

export default App