import React from 'react';

import Container from '../containerComponent/ContainerComponent';
import Cart from '../cartComponent/CartComponent';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: this.props.items,
      cartItems: [],
      cartPrice: 0
    };

    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(id) {
    this.setState(prevState => {
      cartItems: prevState.cartItems.push(this.state.items.filter(item => item.id == id)[0])
    })
  }

  render() {
    return (
      <div className="mainPage">
        <Cart cartItems={this.state.cartItems} cartPrice={this.state.cartPrice}/>
        <Container items={this.state.items} addToCart={this.addToCart} />
      </div>
    )
  }
}

export default Main;
