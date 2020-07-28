import React, { Component } from 'react';
import Card from './Card';

class List extends Component {
  render() {
    const pokemons = this.props.pokemons.pokemons;
    console.log(pokemons);
    const pokeCard = pokemons.map((pm, i) => {
      return <Card key={i} pokemon={pm} />;
    });
    console.log(this.props.pokemons);
    return <ul className="list">{pokeCard}</ul>;
  }
}

export default List;
