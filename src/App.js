import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Resume from './pages/Resume.jsx';
import Footer from './components/Footer.jsx';
import Project from './pages/Project.jsx';

function App() {
  return (
    <div className="App">
      <div className="primary-container">
        <Router>
          <Header />
          {/* <LeftBar /> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path='/resume' component={Resume} />
            <Route path='/projects' component={Project} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
