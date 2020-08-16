import React, { useEffect, useState } from "react";
import BookPreviewContainer from "../BookPreview/BookPreviewContainer";
import { fetchBook } from "../../actions/books";

const BookPreviewPage = () => {
  const [book, setBook] = useState(null);
  useEffect(() => {
    fetchBook("rec020gkM82TfQDyX").then((book) => setBook(book));
  }, []);

  return (
    <>
      {book ? (
        <BookPreviewContainer book={book} />
      ) : (
        <div style={{ color: "white" }}> Loading... </div>
      )}
    </>
  );
};

export default BookPreviewPage;
