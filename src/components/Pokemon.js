import React, { Component } from 'react';
import favIcon from '../images/heart.svg';
import Proptypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const { name, types, url, id, favorites } = this.props;
    const poketypes = types.map((type, i) => {
      return (
        <li key={i} className="typeTag">
          {type.toUpperCase()}
        </li>
      );
    });
    return (
      <>
        {favorites.includes(id.toString()) ? (
          <img src={favIcon} className="favorite" alt="heart" />
        ) : (
          ''
        )}
        <img src={url} alt="Pokemon" />
        <h2 className="name">{name}</h2>
        <ul className="tagsList">{poketypes}</ul>
      </>
    );
  }
}
Pokemon.propTypes = {
  name: Proptypes.string.isRequired,
  types: Proptypes.array.isRequired,
  url: Proptypes.string.isRequired,
  id: Proptypes.number.isRequired,
  favorites: Proptypes.array,
};

export default Pokemon;
