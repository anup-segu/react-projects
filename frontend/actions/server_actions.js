var AppDispatcher = require('../dispatcher/dispatcher.js');
var BenchConstants = require('../constants/bench_constants.js');

module.exports = {
  receiveAll: function(benches) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  },

  receiveSingleBench: function(newBench) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCH_RECEIVED,
      bench: newBench
    });
  }
};
