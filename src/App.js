import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import 'semantic-ui/dist/semantic.css';
import WordLists from './Pages/WordLists';
import WordList from './Pages/WordList';
import Quizes from './Pages/Quizes';
import QuizSession from './Pages/QuizSession';
import HugeApp from './Pages/HugeApp';
import HeaderItem from './Components/HeaderItem';
import ZigbangRoomList from './Practices/ZigbangRoomList';

const routes = [
  {
    linkLabel: '단어장',
    linkTo: '/word-lists',
  },
  {
    linkLabel: 'Take a Quiz',
    linkTo: '/quizes',
  },
  {
    linkLabel: '직방 리스트',
    linkTo: '/zigbangroomlist',
  },
  {
    linkLabel: '거대한 앱',
    linkTo: '/hugeapp',
  },
]

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
              {routes.map((route) => <HeaderItem
                key={route.linkLabel}
                linkTo={route.linkTo}
                label={route.linkLabel}
              />)}
            </div>
          </div>

          <div className="ui divider hidden"></div>
          <div className="ui hidden divider"></div>
          <Route path="/quiz-session" component={QuizSession} />
          <Route path="/quizes" component={Quizes} />
          <Route path="/word-lists" component={WordLists} />
          <Route path="/word-list/:wordListId" component={WordList} />
          <Route path="/zigbangroomlist" component={ZigbangRoomList} />
          <Route path="/hugeapp" component={HugeApp} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
