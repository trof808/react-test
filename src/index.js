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

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
