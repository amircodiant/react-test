import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: '',
      inStockOnly: false,
    };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);

    this.state = {
      products: [
        {
          name: 'Football', price: 100, category: 'sport', stocked: false,
        },
        {
          name: 'Basketball', price: 95, category: 'sport', stocked: true,
        },
        {
          name: 'Baseball', price: 110, category: 'sport', stocked: true,
        },
        {
          name: 'iPod Touch', price: 99, category: 'electronics', stocked: true,
        },
        {
          name: 'iPhone5', price: 95, category: 'electronics', stocked: true,
        },
        {
          name: 'Nexus7', price: 50, category: 'electronics', stocked: true,
        },
      ],
    };
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText,
    });
  }

  handleInStockChange(inStockOnly) {
    this.setState({
      inStockOnly,
    });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs>
            <SearchBar
              filterText={this.state.filterText}
              inStockOnly={this.state.inStockOnly}
              onFilterTextChange={this.handleFilterTextChange}
              onInStockChange={this.handleInStockChange}
            />
          </Col>
        </Row>
        <Row>
          <Col xs>
            <ProductTable
              products={this.state.products}
              filterText={this.state.filterText}
              inStockOnly={this.state.inStockOnly}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FilterableProductTable;
