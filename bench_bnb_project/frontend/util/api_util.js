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
  },

  createBench: function(bench, callback) {
    $.ajax({
      url: "api/bench",
      method: "POST",
      data: {bench: bench},
      success: function (bench) {
        ServerActions.receiveSingleBench(bench);
        callback && callback(bench.id);
      }
    });
  }
};

window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
