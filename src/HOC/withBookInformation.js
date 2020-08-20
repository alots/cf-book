import React,{useState, useEffect} from 'react'
import {fetchBook} from '../fetchers/books'

const withBookInformation = EnhancedComponent => (
  function withBookInformation() {
    const [book, setBook] = useState(null);
  
    useEffect(() => {
      fetchBook("rec020gkM82TfQDyX").then((result) => setBook(result));
    }, []);
    const isLoading = !book; 
      return(
        isLoading
        ? <div style={{color: "white"}}> Loading... </div>
        : <EnhancedComponent book={book} />
      );
  }
);

export default withBookInformation
