import React from 'react';
import '../stylesheets/App.css';
import pokedata from '../data/pokemons.json';
import PokeList from './PokeList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pokemons: pokedata };
  }
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1 className="pageTitle">My Pokemon List</h1>
        <PokeList pokemons={this.state} />
      </div>
    );
  }
}

export default App;
