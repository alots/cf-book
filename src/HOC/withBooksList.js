import React, { useState, useEffect } from "react";
import { fetchAllBooks } from "../fetchers/book";

const withBooksList = (EnhancedComponent) =>
  function withBooksList() {
    const [books, setBooks] = useState(null);

    useEffect(() => {
      fetchAllBooks().then((result) => setBooks(result));
    }, []);

    return <EnhancedComponent isLoading={!books} books={books} />;
  };

export default withBooksList;
