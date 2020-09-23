import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Pokedex from './Pokedex.js';
import PokemonDetails from './PokemonDetails.js';
import './App.css';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Switch>
          <Route path='/pokemons/:pokemonName' component={PokemonDetails} />
          <Route path='/' component={Pokedex} />
        </Switch>
      </BrowserRouter>
      </div>
  );
}

export default App;
