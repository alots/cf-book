import React from "react";
import PropTypes from "prop-types";

const BookInfo = ({ shortDescription }) => {
  return <div className="author-info">{shortDescription}</div>;
};

BookInfo.propTypes = {
  shortDescription: PropTypes.string.isRequired,
};

export default BookInfo;
