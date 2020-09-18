import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './Component/Header'
import Home from './Component/Home'
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
