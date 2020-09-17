import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path='/' render={() => <Home />} />
      </Switch>
    </Router>
  );
}

export default App;
