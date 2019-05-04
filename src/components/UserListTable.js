import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import UserListTableRow from './UserListTableRow';

class UserListTable extends Component {
  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <UserListTableRow />
        </tbody>
      </Table>
    );
  }
}

export default UserListTable;
