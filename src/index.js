import ReactDOM from "react-dom";
import React from "react";
import "./assets/application.scss";
import "bootstrap/dist/css/bootstrap.css";
import AppLayout from "./components/layouts/AppLayout";
import { Switch, Redirect, Route, Router, useParams } from "react-router-dom";
import { createBrowserHistory } from "history";
import routes from "./config/routes";

import BookPreviewPage from "./components/pages/BookPreviewPage";
import UserQuestionPage from "./components/pages/UserQuestionPage";
import AuthContext from "./components/UserPreview/AuthContext";
import BooksListPage from "./components/pages/BooksListPage";
import NotFound from "./components/pages/NotFound";

const history = createBrowserHistory();
const user = {
  email: "ivanov@gmail.com",
  firstName: "Oleg",
  lastName: "Ivanov",
  avatarUrl:
    "https://www.meme-arsenal.com/memes/80eb30251580a0277a3bd0a987a75008.jpg",
};
export const UserContext = React.createContext(user);

ReactDOM.render(
  <Router history={history}>
    <AuthContext.Provider value={{ isAuthenticated: true, currentUser: user }}>
      <AppLayout>
        <Switch>
          <Route path={routes.booksList}>
            <BooksListPage />
          </Route>
          <Route path={routes.bookPreview}>
            <BookPreviewPage />
          </Route>
          <Route path={routes.userQuestion}>
            <UserQuestionPage />
          </Route>
          <Route path="/">
            <Redirect to={routes.booksList} />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </AppLayout>
    </AuthContext.Provider>
  </Router>,
  document.getElementById("root")
);
