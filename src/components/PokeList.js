import React, { Component } from 'react';
import Pokemon from './Pokemon';

class PokeList extends Component {
  render() {
    const { pokemons } = this.props.pokemons;
    const pokeCard = pokemons.map((pm) => {
      const { name, id, types, url } = pm;
      return (
        <li key={id} className="card" id={id}>
          <Pokemon name={name} types={types} url={url} />
        </li>
      );
    });
    return <ul className="list">{pokeCard}</ul>;
  }
}

export default PokeList;
