import React from 'react';
import ReactDOM from 'react-dom';

import './Cart.css';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItems: this.props.cartItems
    };
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div className="cart">
        <div>Корзина</div>
        <div className="cart-items total-pice">25000 рублей</div>
        <div className="cart-items total-count">Элементов в корзине: {this.state.cartItems.length}</div>
        <div className="cart-details"><i className="fa fa-angle-down" aria-hidden="true"></i></div>
        <div className="total-info hidden">
          <ul>
            <li className="cart-prod">Название 1 <span>15000 рублей</span></li>
            <li className="cart-prod">Название 2 <span>10000 рублей</span></li>
            <li className="cart-prod">Название 3 <span>8000 рублей</span></li>
          </ul>
        </div>
      </div>
    )
  }
};

export default Cart;
