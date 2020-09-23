import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Redirect from './components/Redirect';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path='/' render={props => <Redirect {...props} />} />
        <Route exact path='/Home' render={props => <Home {...props}/>} />
        <Route exact path='/Portfolio' render={props => <Portfolio {...props}/>} />
        <Route exact path='/Experience' render={props => <Experience {...props}/>} />
        <Route exact path='/Skills' render={props => <Skills {...props}/>} />
        <Route exact path='/Contact' render={props => <Contact {...props}/>} />
      </Switch>
    </Router>
  );
}

export default App;
