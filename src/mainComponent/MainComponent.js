import React from 'react';
import ReactDOM from 'react-dom';

import Container from '../containerComponent/ContainerComponent';
import Cart from '../cartComponent/CartComponent';

const items = [
  {
    id: 1,
    name: 'iphone',
    price: '12000'
  },
  {
    id: 2,
    name: 'ios',
    price: '15000'
  },
  {
    id: 3,
    name: 'mobile',
    price: '10000'
  },
  {
    id: 4,
    name: 'sumsung',
    price: '8000'
  },
  {
    id: 5,
    name: 'sums 200',
    price: '7000'
  },
  {
    id: 6,
    name: 'iph 101',
    price: '19000'
  }
]

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mainPage">
        <Cart />
        <Container items={items} />
      </div>
    )
  }
}

export default Main;
