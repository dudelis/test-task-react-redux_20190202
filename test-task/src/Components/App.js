import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import './App.css';
import TileList from './TileList';
import history from '../history';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={TileList} />
            <Route path="/open/:id" component={TileList} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
