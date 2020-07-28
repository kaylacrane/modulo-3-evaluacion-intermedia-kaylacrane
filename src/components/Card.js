import React, { Component } from 'react';

class Card extends Component {
  render() {
    const pokemon = this.props.pokemon;
    console.log(pokemon);
    const { name, id, types, url } = pokemon;
    const poketypes = types.map((type) => {
      return <li className="typeTag">{type.toUpperCase()}</li>;
    });
    return (
      <li className="card" id={id}>
        <img src={url} alt="pokemon" />
        <h2 className="name">{name}</h2>
        <ul className="tagsList">{poketypes}</ul>
      </li>
    );
  }
}

export default Card;
