import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './soreComponent';
import Item from './ItemComponent';
import App from './heroComponent';
import Container from './ContainerComponent';
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



ReactDOM.render(
  <Container items={items} />,
  document.getElementById('root')
);
