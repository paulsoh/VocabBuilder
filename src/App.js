import React, { Component } from 'react';
import WordLists from './Pages/WordLists';
import WordList from './Pages/WordList';
import Quizes from './Pages/Quizes';
import QuizSession from './Pages/QuizSession';
import {
  BrowserRouter,
  Link,
  Route,
} from 'react-router-dom';
import 'semantic-ui/dist/semantic.css';

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="ui attached stackable menu">
            <div className="ui container">
              <Link to="/word-list">
                <a className="item">
                  <i className="home icon"></i> Word Lists
                </a>
              </Link>
              <Link to="/quizes">
                <a
                  className="item"
                >
                  <i className="tasks icon"></i> Quiz
                </a>
              </Link>
            </div>
          </div>

          <div className="ui divider hidden"></div>
          <div className="ui hidden divider"></div>
          <Route path="/quiz-session" component={QuizSession} />
          <Route path="/quizes" component={Quizes} />
          <Route path="/words-list" component={WordLists} />
          <Route path="/word-list" component={WordList} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
