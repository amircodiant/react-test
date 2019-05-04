import React, { Component } from 'react';
import UserExpensesTable from './UserExpensesTable';

class ExpensesReportTableRow extends Component {
  render() {
    return (
      <tr>
        <td>1</td>
        <td>Amir</td>
        <td>
          <UserExpensesTable />
        </td>
        <td>1000</td>
        <td>500</td>
        <td>00</td>
      </tr>
    );
  }
}

export default ExpensesReportTableRow;
