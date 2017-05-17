import React from 'react';

const CartItem = (props) => {
  return (
    <li className="cart-prod"><a></a> {props.name} <span>{props.price} рублей</span></li>
  )
}

export default CartItem;
