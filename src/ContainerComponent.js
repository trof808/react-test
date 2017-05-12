import React from 'react';
import ReactDOM from 'react-dom';
import Item from './ItemComponent';

import './Item.css'

class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        {this.props.items.map(item => {
          return (
            <Item key={item.id} name={item.name} price={item.price} />
          )
        })}
      </div>
    )
  }
}

export default Container;
