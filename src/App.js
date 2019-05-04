import React, { Component } from 'react';
import './App.css';
import Login from './pages/Login';
import MenuBar from './pages/layout/MenuBar';
import UserList from './pages/UserList';
import UserExpenses from './pages/UserExpenses';
import ExpenseReport from './pages/ExpenseReport';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuBar />
        <div className="container">
          <UserList />
          <UserExpenses />
          <ExpenseReport />
        </div>

        <Login />
      </div>
    );
  }
}

export default App;
