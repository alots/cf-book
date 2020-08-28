import { useEffect, useState } from "react";
import { fetchBook } from "../fetchers/books";

const useFetchBook = () => {
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetchBook("rec020gkM82TfQDyX").then((result) => setBook(result));
  }, []);

  return book;
};

export default useFetchBook;
