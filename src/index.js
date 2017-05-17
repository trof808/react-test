import React from 'react';
import ReactDOM from 'react-dom';

import Counter from './soreComponent';
import App from './heroComponent';
import Main from './mainComponent/MainComponent';

import './index.css';

let data = [
  {
    id: 1,
    title:"React",
    subtitle:"Библиотека для создания пользовательских интерфейсов",
    imageUrl:"https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png"
  },
  {
    id: 2,
    title:"Angular",
    subtitle:"Другая библиотека",
    imageUrl:"http://devstickers.com/assets/img/cat/angular2.png"
  }
]

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

ReactDOM.render(
  <Main items={items} />,
  document.getElementById('root')
);
