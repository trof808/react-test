import React from 'react';
import CartItem from '../cartItemComponent/cartItem'

import './Cart.css';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItems: this.props.cartItems,
      cartPrice: this.props.cartPrice,
      cartItemsHide: true
    };

    this.showCartItems = this.showCartItems.bind(this);
  }

  showCartItems() {
    this.setState( (prevState) => {
      cartItemsHide: !prevState.cartItemsHide
    })
  }

  render() {
    let cartInfoClass = `total-info`
    if(this.state.cartItemsHide) cartInfoClass += ' hidden'

    if(this.state.cartItems.length > 0) {
      var displayCartItems = this.state.cartItems.map(item => (
        <CartItem key={item.id} name={item.name} price={item.price} />
      ));

      var content = <div className={cartInfoClass}> <ul>{displayCartItems}</ul> </div>
    } else {
      content = <div className={cartInfoClass}>В корзине нет элементов</div>
    }


    return (
      <div className="cart">
        <div>Корзина</div>
        <div className="cart-items total-pice">{this.state.cartPrice} рублей</div>
        <div className="cart-items total-count">Элементов в корзине: {this.state.cartItems.length}</div>
        <div className="cart-details" onClick={this.showCartItems}><i className="fa fa-angle-down" aria-hidden="true"></i></div>
        {content}
      </div>
    )
  }
};

export default Cart;
