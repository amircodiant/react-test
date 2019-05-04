import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import ExpensesReportTableRow from './ExpensesReportTableRow';

class ExpensesReportTable extends Component {
  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>User</th>
            <th>Stats</th>
            <th>Approved Amt.</th>
            <th>Reimbursements</th>
            <th>Dues</th>
          </tr>
        </thead>
        <tbody>
          <ExpensesReportTableRow />
          <ExpensesReportTableRow />
        </tbody>
      </Table>
    );
  }
}

export default ExpensesReportTable;
