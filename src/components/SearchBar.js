import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="search">
            <Form.Control value="test" type="text" placeholder="Search..." />
          </Form.Group>
          <Form.Group controlId="stock">
            <Form.Check type="checkbox" label="Only show product in stock" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form>
      </div>
    );
  }
}

export default SearchBar;
