import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <div className="primary-container">
        <Router>
          <Header />
          <Switch>
            <Route path="/" />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
