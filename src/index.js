import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const ImageCounter = function(props) {
  return (
    <div className="image-counter">
      <div className="count">{props.count}</div>
      <img className="image" src={props.imageUrl} onClick={props.onCount} />
    </div>
  );
}

const Hero = React.createClass({
  getInitialState: function() {
    return {
      count: 0
    }
  },

  handleClick: function() {
    this.setState({ count: this.state.count + 1 })
  },

  render: function() {
    return (
      <div className="container">
        <ImageCounter imageUrl={this.props.imageUrl} count={this.state.count} onCount={this.handleClick} />
        <h2 onClick={this.handleClick}>{this.props.title}</h2>
        <p>{this.props.subtitle}</p>
      </div>
    )
  }
})

const App = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.heroes.map(function(hero) {
          return (
            <Hero key={hero.id} title={hero.title} subtitle={hero.subtitle} imageUrl={hero.imageUrl}/>
          )
        })}
      </div>
    )
  }
})

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
  <App heroes={data}/>,
  document.getElementById('root')
);
