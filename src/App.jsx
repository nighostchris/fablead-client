import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LoginPage from './LoginPage';
import MainPage from './MainPage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ MainPage } />
          <Route path="/dashboard" component={ MainPage } />
        </Switch>
      </Router>
    );
  }
}

export default App;