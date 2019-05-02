import React, { Component } from 'react';
import './App.css';
import Clock from './components/Clock';
import NameForm from './components/NameForm';
import Calculator from './components/Calculator';
import FancyBorder from './components/FancyBorder';
import SplitPane from './components/SplitPane';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React-App</h1>
        {/* <Clock /> */}
        {/* <NameForm /> */}
        {/* <Calculator /> */}

        <SplitPane
          left={<Clock />}
          right={(
            <FancyBorder color="blue">
              <h1 className="Dialog-title">Welcome</h1>
              <p className="Dialog-message">Thank you for visiting our spacecraft!</p>
            </FancyBorder>
)}
        />

        <Calculator />
      </div>
    );
  }
}

export default App;
