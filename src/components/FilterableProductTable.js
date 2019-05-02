import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs>
            <SearchBar />
          </Col>
        </Row>
        <Row>
          <Col xs>
            <ProductTable />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FilterableProductTable;
