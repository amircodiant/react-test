import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  handleInStockChange(e) {
    this.props.onInStockChange(e.target.checked);
  }

  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="search">
            <Form.Control
              value={this.props.filterText}
              type="text"
              placeholder="Search..."
              onChange={this.handleFilterTextChange}
            />
          </Form.Group>
          <Form.Group controlId="stock">
            <Form.Check
              type="checkbox"
              checked={this.props.inStockOnly}
              onChange={this.handleInStockChange}
              label="Only show product in stock"
            />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default SearchBar;
