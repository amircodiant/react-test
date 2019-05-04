import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import UserExpensesTableRow from './UserExpensesTableRow';

class UserExpensesTable extends Component {
  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>For</th>
            <th>Amount (Rs)</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <UserExpensesTableRow />
          <UserExpensesTableRow />
          <UserExpensesTableRow />
        </tbody>
      </Table>
    );
  }
}

export default UserExpensesTable;
