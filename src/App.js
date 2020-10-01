import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <div className="primary-container">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path='/about' component={About} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
