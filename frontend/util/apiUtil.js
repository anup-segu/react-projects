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
  }
};
