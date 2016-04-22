var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var _benches = {};
var BenchStore = new Store(AppDispatcher);
var BenchConstants = require('../constants/bench_constants.js');

var resetBenches = function (benches) {
  benches.forEach( function (bench) {
    _benches[bench.id] = bench;
  });
};

BenchStore.all = function(){
  return Object.assign({}, _benches);
};

BenchStore.__onDispatch = function(payload) {
  switch(payload.actionType){
  case BenchConstants.BENCHES_RECEIVED:
    resetBenches(payload.benches);
    BenchStore.__emitChange();
    break;
  }
};

window.BenchStore = BenchStore;

module.exports = BenchStore;
