import React, { Component } from 'react';
import Pokemon from './Pokemon';
import Proptypes from 'prop-types';

class PokeList extends Component {
  constructor(props) {
    super(props);
    this.favsHandlerChild = this.favsHandlerChild.bind(this);
  }
  favsHandlerChild(ev) {
    this.props.favsHandler(ev);
  }
  render() {
    const { pokemons } = this.props;
    const pokeCard = pokemons.map((pm) => {
      const { name, id, types, url } = pm;
      return (
        <li
          key={id}
          className="card"
          id={id}
          name={name}
          onClick={this.favsHandlerChild}
        >
          <Pokemon
            name={name}
            types={types}
            url={url}
            id={id}
            favorites={this.props.favorites}
          />
        </li>
      );
    });
    return <ul className="list">{pokeCard}</ul>;
  }
}
PokeList.propTypes = {
  pokemons: Proptypes.array.isRequired,
  favsHandler: Proptypes.func.isRequired,
};

export default PokeList;
