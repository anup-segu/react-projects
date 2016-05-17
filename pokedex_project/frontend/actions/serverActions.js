var dispatcher = require("../dispatcher/dispatcher.js");
var PokemonConstants = require("../constants/pokemonConstants.js");

module.exports = {
  receiveAllPokemons: function(pokemons) {
    dispatcher.dispatch({
      actionType: PokemonConstants.POKEMONS_RECEIVED,
      pokemons: pokemons
    });
  },

  receiveSinglePokemon: function(pokemon) {
    dispatcher.dispatch({
      actionType: PokemonConstants.POKEMON_RECEIVED,
      pokemon: pokemon
    });
  },

  receiveSingleToy: function(toy) {
    dispatcher.dispatch({
      actionType: PokemonConstants.TOY_RECEIVED,
      toy: toy
    });
  }
};
