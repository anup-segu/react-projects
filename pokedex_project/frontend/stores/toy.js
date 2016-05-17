var Store = require("flux/utils").Store;
var dispatcher = require("../dispatcher/dispatcher.js");

var _toys = {};

var resetToys = function (toys) {
  _toys = {};
  toys.forEach( function(toy){
    _toys[toy.id] = toy;
  });
};

var resetToy = function (toy) {
  _toys[toy.id] = toy;
};

var ToyStore = new Store(dispatcher);

ToyStore.find = function(id) {
  return _toys[id];
};

ToyStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
  case "TOY_RECEIVED":
    resetToy(payload.toy);
    this.__emitChange();
    break;
  }
};


module.exports = ToyStore;
