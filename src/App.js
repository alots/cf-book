import React from 'react'
import BookPreviewPage from './components/pages/BookPreviewPage';
import UserQuestionPage from './components/pages/UserQuestionPage';
import { Route, Switch, Redirect, withRouter, Link } from "react-router-dom"
import HeaderMain from './components/Header/HeaderMain';


const App = ({history}) => {
    return (
    <div className="App">
      <>
          <HeaderMain />
          <Route history={history}  path='/bookpreview' component={BookPreviewPage}/>
          <Route history={history}  path='/userquestion' component={UserQuestionPage} />
          {<Redirect from='/' to='/bookpreview' /> } 
          <footer className="footer">
          &copy; {new Date().getFullYear()}, Thinknetica
          </footer> 
      </>
    </div>
    );
}


export default withRouter(App)
