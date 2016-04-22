var ServerActions = require("../actions/serverActions.js");

module.exports = {
  fetchAllPokemons: function() {
    $.ajax({
      url: "api/pokemon",
      type: "GET",
      success: function(result) {
        ServerActions.receiveAllPokemons(result);
      }
    });
  },

  fetchPokemon: function(id) {
    $.ajax({
      url: "api/pokemon/" + id,
      type: "GET",
      success: function(result) {
        ServerActions.receiveSinglePokemon(result);
      }
    });
  },

  fetchToy: function(id) {
    $.ajax({
      url: "api/toys/" + id,
      type: "GET",
      success: function(result) {
        ServerActions.receiveSingleToy(result);
      }
    });
  }
};
