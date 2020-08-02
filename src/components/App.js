import React from 'react';
import '../stylesheets/App.scss';
import pokedata from '../data/pokemons.json';
import PokeList from './PokeList';
import favIcon from '../images/heart.svg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.favsHandler = this.favsHandler.bind(this);
    this.state = { pokemons: pokedata, favorites: [] };
  }
  favsHandler(ev) {
    const clickedPokemon = ev.currentTarget.id;
    const favsList = this.state.favorites;
    let updatedList;
    if (favsList.includes(clickedPokemon)) {
      updatedList = favsList.filter((pokemon) => pokemon !== clickedPokemon);
    } else if (!favsList.includes(clickedPokemon)) {
      updatedList = [...favsList, clickedPokemon];
    }
    this.setState({ favorites: updatedList });
  }
  render() {
    return (
      <div className="App">
        <img
          className="titleImage"
          src="https://media1.tenor.com/images/8b6c34504e2855d9a19a5b168155f3d6/tenor.gif?itemid=16327495"
          alt="pokemon high five gif giphy"
        />
        <h1 className="pageTitle">My Pokemon List </h1>
        <div className="favorites-list">
          <img src={favIcon} alt="pokeheart" className="pokeheart" />
          <span className="favorites-number">
            {`${this.state.favorites.length}`}
          </span>
          <img src={favIcon} alt="pokeheart" className="pokeheart" />
        </div>
        <PokeList
          pokemons={this.state.pokemons}
          favorites={this.state.favorites}
          favsHandler={this.favsHandler}
        />
      </div>
    );
  }
}

export default App;
