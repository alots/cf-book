import React from "react";
import { Link } from "react-router-dom";
import routes from "../../config/routes";

const NotFound = () => {
  return (
    <div className="page-notFound">
      Oops, nothing was found!
      <Link to={routes.booksList}> Go home page</Link>
    </div>
  );
};

export default NotFound;
