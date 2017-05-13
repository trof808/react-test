import React from 'react';
import ReactDOM from 'react-dom';
import Item from '../itemComponent/ItemComponent';
import Search from '../searchComponent/searchComponent'

import '../itemComponent/Item.css'

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: this.props.items,
      nameFilter: ''
    }

    this.handleFilterUpdate = this.handleFilterUpdate.bind(this);
  }

  handleFilterUpdate(filterValue) {
    this.setState({
      nameFilter: filterValue
    })
  }

  render() {
    var displayedItems = this.state.items.filter(function(item) {
      var match = item.name.toLowerCase().indexOf(this.state.nameFilter.toLowerCase());
      var match2 = item.price.indexOf(this.state.nameFilter);
      return (match !== -1 || match2 !== -1);
    }.bind(this));

    var content;
    if(displayedItems.length > 0) {
      var items = displayedItems.map(function(item) {
        return <Item key={item.id} id={item.id} name={item.name} price={item.price} />
      })
      content = <div className="container">{items}</div>
    } else {
      content = <div className="container">Нет совпадений</div>
    }

    return (
      <div>
        <Search updateFilter={this.handleFilterUpdate} />
        {content}
      </div>

    )
  }
}

export default Container;
