import React from 'react';
import ReactDOM from 'react-dom';

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

export default App;
