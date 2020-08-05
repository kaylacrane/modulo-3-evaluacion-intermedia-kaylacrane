import React, { Component } from 'react';

class ResetFavs extends Component {
  constructor(props) {
    super(props);
    this.resetHandlerChild = this.resetHandlerChild.bind(this);
  }
  resetHandlerChild() {
    this.props.resetHandler();
  }
  render() {
    return (
      <button className="reset-favs-button" onClick={this.resetHandlerChild}>
        <span>Reset Favorites</span>
      </button>
    );
  }
}

export default ResetFavs;
