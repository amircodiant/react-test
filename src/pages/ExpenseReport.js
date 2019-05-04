import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import UserExpensesTable from '../components/UserExpensesTable';
import ExpensesReportTable from '../components/ExpensesReportTable';

class ExpenseReport extends Component {
  render() {
    return (
      <div className="jumbotron ">
        <h4>Expenses Report</h4>
        <ExpensesReportTable />
      </div>
    );
  }
}

export default ExpenseReport;
