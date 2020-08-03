import ReactDOM from 'react-dom';
import React from 'react'
import App from './App';
import './assets/application.css'
import 'bootstrap/dist/css/bootstrap.css';
import books from './books.json';
import AuthContext from './components/UserPreview/AuthContext'
import { Router } from "react-router-dom"
import {createBrowserHistory} from 'history'

const history = createBrowserHistory()
const user = {
  email: 'ivanov@gmail.com',
  firstName: 'Oleg',
  lastName: 'Ivanov',
  avatarUrl: 'https://www.meme-arsenal.com/memes/80eb30251580a0277a3bd0a987a75008.jpg'
};

ReactDOM.render(
  <Router history={history}>
    <AuthContext.Provider value={{isAuthenticated: true, currentUser: user}}>
      <App book={books[0]}/>
    </AuthContext.Provider>
  </Router>,
  document.getElementById('root')
);
