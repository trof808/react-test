import React from 'react';
import ReactDOM from 'react-dom';

import Container from '../containerComponent/ContainerComponent';
import Cart from '../cartComponent/CartComponent';

const items = [
  {
    id: 1,
    name: 'Название',
    price: 12000
  },
  {
    id: 2,
    name: 'Название1',
    price: 15000
  },
  {
    id: 3,
    name: 'Название2',
    price: 10000
  },
  {
    id: 4,
    name: 'Название3',
    price: 8000
  },
  {
    id: 5,
    name: 'Название4',
    price: 7000
  },
  {
    id: 6,
    name: 'Название5',
    price: 19000
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
