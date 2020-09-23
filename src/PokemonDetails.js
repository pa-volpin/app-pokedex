import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon.js';
import Button from './Button.js';
import pokemons from './data.js';
import './PokemonDetails.css';

class PokemonDetails extends React.Component {
  constructor() {
    super();
    
  }
  
  render() {
    let { pokemonName } = this.props.match.params;
    pokemonName = pokemonName.includes(':') ? pokemonName.slice(1) : pokemonName;
    pokemonName = pokemonName[0].toUpperCase() + pokemonName.slice(1).toLowerCase();
    const thePokemon = pokemons.find(pokemon => pokemon.name === pokemonName);
    return (
      <div className='pokemon-details'>
        <Pokemon pokemon={thePokemon} link='false' />
        <div className='details-section'>
          <div className='title'>
            <h1>{pokemonName} Summary</h1>
          </div>
          <div className='maps-container'>
            <p>{thePokemon.summary}</p>
          </div>
        </div>
        <div className='details-section'>
          <div className='title'>
            <h1>{pokemonName} Maps</h1>
          </div>
          <div className='maps-container'>
            {thePokemon.foundAt.map(eachLocation => <div><img src={eachLocation.map} /><p>{eachLocation.location}</p></div>)}
          </div>
        </div>
      </div>
    );
  }
}

export default PokemonDetails;