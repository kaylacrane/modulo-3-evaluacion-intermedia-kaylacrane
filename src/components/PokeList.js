import React, { Component } from 'react';
import Pokemon from './Pokemon';

class PokeList extends Component {
  render() {
    const pokemons = this.props.pokemons.pokemons;
    console.log(pokemons);
    const pokeCard = pokemons.map((pm, i) => {
      return <Pokemon key={i} pokemon={pm} />;
    });
    console.log(this.props.pokemons);
    return <ul className="list">{pokeCard}</ul>;
  }
}

export default PokeList;
