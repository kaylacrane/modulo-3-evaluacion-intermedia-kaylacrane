import React from 'react';
import '../stylesheets/App.css';
import pokedata from '../data/pokemons.json';
import List from './List';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pokemons: pokedata };
  }
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <List pokemons={this.state} />
      </div>
    );
  }
}

export default App;
