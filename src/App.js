import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Redirect from './components/Redirect';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path='/' render={props => <Redirect {...props} />} />
        <Route exact path='/Home' render={props => <Home {...props}/>} />
        <Route exact path='/Portfolio' render={props => <Portfolio {...props}/>} />
      </Switch>
    </Router>
  );
}

export default App;
