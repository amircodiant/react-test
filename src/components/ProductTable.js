import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

class ProductTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        { name: 'Football', price: 100, category: 'sport' },
        { name: 'Basketball', price: 95, category: 'sport' },
        { name: 'Baseball', price: 110, category: 'sport' },
        { name: 'iPod Touch', price: 99, category: 'electronics' },
        { name: 'iPhone5', price: 95, category: 'electronics' },
        { name: 'Nexus7', price: 50, category: 'electronics' },
      ],
    };
  }

  render() {
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <ProductCategoryRow category="Sports" />
            <ProductRow product={this.state.products[0]} />
            <ProductRow product={this.state.products[1]} />
            <ProductRow product={this.state.products[2]} />

            <ProductCategoryRow category="Electronics" />
            <ProductRow product={this.state.products[3]} />
            <ProductRow product={this.state.products[4]} />
            <ProductRow product={this.state.products[5]} />
          </tbody>
        </Table>
      </div>
    );
  }
}

export default ProductTable;
