import React from "react";
import { generatePath } from "react-router";
import { Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import withLoader from "../../HOC/withLoader";
import withBooksList from "../../HOC/withBooksList";
import BookCard from "../BookPreview/BookCard";
import { linkUrl, routes } from "../../config/routes";
import { Helmet } from "react-helmet";

const BooksListPage = ({ books }) => {
  return (
    <Container>
      <Helmet>
        <title> BooksApp </title>
      </Helmet>
      <Row className="bookList-row">
        {books.map((book) => (
          <Link
            key={book.id}
            to={generatePath(routes.bookPreview, { id: book.id })}
          >
            <BookCard cover={book.cover} title={book.title} />
          </Link>
        ))}
      </Row>
    </Container>
  );
};

export default withBooksList(withLoader(BooksListPage));
