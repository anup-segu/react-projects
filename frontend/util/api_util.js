var ServerActions = require('../actions/server_actions.js');


var ApiUtil = {
  fetchbenches: function() {
    $.ajax({
      url: "api/bench",
      success: function(benches) {
        ServerActions.receiveAll(benches);
      }
    });
  }
};

window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
