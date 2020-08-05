import React from 'react';
import '../stylesheets/App.scss';
import pokedata from '../data/pokemons.json';
import PokeList from './PokeList';
import favIcon from '../images/heart.svg';
import Filters from './Filters';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.favsHandler = this.favsHandler.bind(this);
    this.selectHandler = this.selectHandler.bind(this);
    this.state = { pokemons: pokedata, favorites: [], typeFilter: 'all' };
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
  selectHandler(event) {
    const type = event.currentTarget.value;
    this.setState({ typeFilter: type });
  }
  componentDidMount() {
    const storage = localStorage.getItem('favorite pokemons');
    if (storage) {
      const updateFavorites = JSON.parse(storage);
      this.setState({ favorites: updateFavorites });
    }
  }
  componentDidUpdate() {
    const favsList = this.state.favorites;
    if (favsList.length !== 0) {
      localStorage.setItem('favorite pokemons', JSON.stringify(favsList));
    } else if (favsList.length === 0) {
      localStorage.removeItem('favorite pokemons');
    }
  }
  render() {
    const typeFilter = this.state.typeFilter;
    const pokemonsList = this.state.pokemons;
    const filteredList = pokemonsList.filter((pm) =>
      pm.types.includes(typeFilter)
    );
    const favsList = this.state.favorites;

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
          <span className="favorites-number">{`${favsList.length}`}</span>
          <img src={favIcon} alt="pokeheart" className="pokeheart" />
        </div>{' '}
        <Filters selectHandler={this.selectHandler} />
        <PokeList
          pokemons={typeFilter !== 'all' ? filteredList : pokemonsList}
          favorites={favsList}
          favsHandler={this.favsHandler}
        />
      </div>
    );
  }
}

export default App;
