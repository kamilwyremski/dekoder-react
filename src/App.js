import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  // eslint-disable-next-line
  Link
} from 'react-router-dom';

import Home from './Home';
import Skrypty from './Skrypty';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Dekoder</Link>
                </li>
                <li className="nav-item">
                  <Link to="/skrypty" className="nav-link">Skrypty</Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className="container">
            <div className="text-center">
              <h1>
                Witaj na stronie title!
              </h1>
            </div>
            <Route exact path="/" component={Home} />
            <Route path="/skrypty" component={Skrypty} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
