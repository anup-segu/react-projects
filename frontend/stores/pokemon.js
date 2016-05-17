var Store = require("flux/utils").Store;
var dispatcher = require("../dispatcher/dispatcher.js");

var _pokemons = {};

var resetPokemons = function (pokemons) {
  _pokemons = {};
  pokemons.forEach( function(pokemon){
    _pokemons[pokemon.id] = pokemon;
  });
};

var resetPokemon = function (pokemon) {
  _pokemons[pokemon.id] = pokemon;
};

var PokemonStore = new Store(dispatcher);

PokemonStore.all = function() {
  var result = [];
  Object.keys(_pokemons).forEach( function(id) {
    result.push(_pokemons[id]);
  });

  return result;
};

PokemonStore.find = function(id) {
  return _pokemons[id];
};

PokemonStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
  case "POKEMONS_RECEIVED":
    resetPokemons(payload.pokemons);
    this.__emitChange();
    break;
  case "POKEMON_RECEIVED":
    resetPokemon(payload.pokemon);
    this.__emitChange();
    break;
  }
};


module.exports = PokemonStore;
