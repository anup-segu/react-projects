var apiUtil = require("../util/apiUtil.js");

module.exports = {
  fetchAllPokemons: function(){
    apiUtil.fetchAllPokemons();
  },

  fetchPokemon: function (id) {
    apiUtil.fetchPokemon(id);
  }
};
