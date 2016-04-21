var dispatcher = require("../dispatcher/dispatcher.js");
var PokemonConstants = require("../constants/pokemonConstants.js");

module.exports = {
  receiveAllPokemons: function(pokemons) {
    dispatcher.dispatch({
      actionType: PokemonConstants.POKEMONS_RECEIVED,
      pokemons: pokemons
    });
  }
};
