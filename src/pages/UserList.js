import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import UserListTable from '../components/UserListTable';

class UserList extends Component {
  render() {
    return (
      <div className="jumbotron ">
        <h4>User List</h4>
        <UserListTable />
      </div>
    );
  }
}

export default UserList;
