import React, { useState, useEffect } from "react";
import { fetchBook } from "../fetchers/book";
import { useParams } from "react-router-dom";
/* import withLoader from '../HOC/withLoader' */

const withBookInformation = (EnhancedComponent) =>
  function withBookInformation() {
    const [book, setBook] = useState(null);
    let { id } = useParams();
    console.log(id);

    useEffect(() => {
      fetchBook(id).then((result) => setBook(result));
    }, []);
    /*  const EnhancedComponentWithLoader = withLoader(EnhancedComponent); */
    return <EnhancedComponent isLoading={!book} book={book} />;
  };

export default withBookInformation;
