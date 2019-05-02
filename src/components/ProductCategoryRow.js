import React, { Component } from 'react';

class ProductCategoryRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td colSpan="2">
          <b>{this.props.category}</b>
        </td>
      </tr>
    );
  }
}

export default ProductCategoryRow;
