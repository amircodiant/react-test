import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GenericPage from './pages/GenericPage';
import ElementsPage from './pages/ElementsPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={HomePage} />
          <Route path="/generic" component={GenericPage} />
          <Route path="/elements" component={ElementsPage} />
        </Router>
      </div>
    );
  }
}

export default App;
