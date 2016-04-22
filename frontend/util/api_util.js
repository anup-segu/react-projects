var ServerActions = require('../actions/server_actions.js');


var ApiUtil = {
  fetchbenches: function(bounds) {
    var bound_query = {bounds: bounds};
    $.ajax({
      url: "api/bench",
      data: bound_query,
      success: function(benches) {
        ServerActions.receiveAll(benches);
      }
    });
  }
};

window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
