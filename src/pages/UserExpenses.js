import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import UserExpensesTable from '../components/UserExpensesTable';

class UserExpenses extends Component {
  render() {
    return (
      <div className="jumbotron ">
        <h4>User Expenses</h4>
        <h5>Emp 1</h5>
        <UserExpensesTable />
      </div>
    );
  }
}

export default UserExpenses;
