import React, { Component } from 'react';

class Filters extends Component {
  constructor(props) {
    super(props);
    this.selectHandlerChild = this.selectHandlerChild.bind(this);
  }
  selectHandlerChild(event) {
    this.props.selectHandler(event);
  }
  render() {
    return (
      <form className="filters">
        <label htmlFor="cars">Sort by type:</label>

        <select name="cars" id="cars" onChange={this.selectHandlerChild}>
          <option value="all" defaultValue>
            All
          </option>
          <option value="poison">Poison</option>
          <option value="grass">Grass</option>
          <option value="fire">Fire</option>
          <option value="water">Water</option>
          <option value="flying">Flying</option>
          <option value="bug">Bug</option>
        </select>
      </form>
    );
  }
}

export default Filters;
