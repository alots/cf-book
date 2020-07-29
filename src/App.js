import React from 'react'
import BookPreviewPage from './pages/BookPreviewPage';

const App = ({books}) => {
    return (
      <BookPreviewPage book={books[0]} /> 
    );
}

export default App
