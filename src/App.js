import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Conference from './pages/Conference';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route  path="/conference">
            <Conference/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
