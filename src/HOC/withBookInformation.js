import React, { useState, useEffect } from "react";
import { fetchBook } from "../fetchers/books";
/* import withLoader from '../HOC/withLoader' */

const withBookInformation = (EnhancedComponent) =>
  function withBookInformation() {
    const [book, setBook] = useState(null);

    useEffect(() => {
      fetchBook("rec020gkM82TfQDyX").then((result) => setBook(result));
    }, []);
    /*  const EnhancedComponentWithLoader = withLoader(EnhancedComponent); */
    return <EnhancedComponent isLoading={!book} book={book} />;
  };

export default withBookInformation;
