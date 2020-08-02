import React from 'react';
import '../stylesheets/App.scss';
import pokedata from '../data/pokemons.json';
import PokeList from './PokeList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pokemons: pokedata };
  }
  render() {
    return (
      <div className="App">
        <img
          className="titleImage"
          src="https://media1.tenor.com/images/8b6c34504e2855d9a19a5b168155f3d6/tenor.gif?itemid=16327495"
          alt="pokemon high five gif giphy"
        />
        <h1 className="pageTitle">My Pokemon List</h1>
        <PokeList pokemons={this.state} />
      </div>
    );
  }
}

export default App;
