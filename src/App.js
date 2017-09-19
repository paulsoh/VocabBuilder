import React, { Component } from 'react';
import {
  BrowserRouter,
  Link,
  Route,
} from 'react-router';
import 'semantic-ui/dist/semantic.css';


class App extends Component {
  render() {
    return (
      <div
        className="ui container"
      >
        <div
          className="ui card"
        >
          <div className="ui header">
            Whats up
          </div>
        </div>
      </div>
    );
  }
}

export default App;
