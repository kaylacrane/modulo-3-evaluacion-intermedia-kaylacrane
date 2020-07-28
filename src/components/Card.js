import React, { Component } from 'react';

class Card extends Component {
  render() {
    const pokemon = this.props.pokemon;
    console.log(pokemon);
    const { name, id, types, url } = pokemon;
    const poketypes = types.map((type) => {
      return <li>{type}</li>;
    });
    return (
      <div className="card" id={id}>
        <img src={url} alt="pokemon" />
        <h2 className="name">{name}</h2>
        <ul className="tags">{poketypes}</ul>
      </div>
    );
  }
}

export default Card;
