import React, { Component } from 'react';
import './App.css';
import Clock from './components/Clock';
import NameForm from './components/NameForm';
import Calculator from './components/Calculator';
import FancyBorder from './components/FancyBorder';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React-App</h1>
        {/* <Clock /> */}
        {/* <NameForm /> */}
        {/* <Calculator /> */}
        <FancyBorder color="blue">
          <h1 className="Dialog-title">Welcome</h1>
          <p className="Dialog-message">Thank you for visiting our spacecraft!</p>
        </FancyBorder>
      </div>
    );
  }
}

export default App;
