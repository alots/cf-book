import React, { useState, useEffect } from "react";
import { fetchBook } from "../fetchers/book";
import { useParams } from "react-router-dom";

const withBookInformation = (EnhancedComponent) =>
  function withBookInformation() {
    const [book, setBook] = useState(null);
    let { id } = useParams();

    useEffect(() => {
      fetchBook(id).then((result) => setBook(result));
    }, [id]);

    return <EnhancedComponent isLoading={!book} book={book} />;
  };

export default withBookInformation;
