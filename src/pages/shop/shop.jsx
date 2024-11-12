import React, { Component } from 'react';
import { Product } from './product.jsx';
import './shop.css';

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
        this.setState({ products: json });
      });
  }

  render() {
    return (
      <div className="Shop">
        <div className="shopTitle">
          <h1>CHROMA</h1>
        </div>
        <div className="products">
          {this.state.products.map((product) => (
            <Product key={product.id} data={product} />
          ))}
        </div>
      </div>
    );
  }
}

export default Shop;
