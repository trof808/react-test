import React from 'react';
import ReactDOM from 'react-dom';

import './Search.css';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(e) {
    this.props.updateFilter(e.target.value);
  }

  render() {
    return (
      <input className="search" ref="filterInput" onChange={this.handleFilterChange} type="text" placeholder="Введите для поиска"/>
    )
  }
};

export default Search;
