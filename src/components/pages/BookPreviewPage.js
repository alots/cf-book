import React from "react";
import BookPreviewContainer from "../BookPreview/BookPreviewContainer";
import PropTypes from "prop-types";

const BookPreviewPage = ({ book }) => {
  return (
    <>
      <BookPreviewContainer book={book} />
    </>
  );
};

BookPreviewPage.propTypes = {
  book: PropTypes.object.isRequired,
};

export default BookPreviewPage;
