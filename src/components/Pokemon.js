import React, { Component } from 'react';

class Pokemon extends Component {
  render() {
    const { name, types, url } = this.props;
    const poketypes = types.map((type, i) => {
      return (
        <li key={i} className="typeTag">
          {type.toUpperCase()}
        </li>
      );
    });
    return (
      <>
        <img src={url} alt="Pokemon" />
        <h2 className="name">{name}</h2>
        <ul className="tagsList">{poketypes}</ul>
      </>
    );
  }
}

export default Pokemon;
