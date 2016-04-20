var dispatcher = require("../dispatcher/Dispatcher");
var Store = require("flux/utils").Store;

var KeyStore = new Store(dispatcher);

var _keys = [];

KeyStore.has_key = function(noteName) {
  if (_keys.indexOf(noteName) > -1) {
    return true;
  }
  return false;
};

KeyStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
  case "ADD_NOTE":
    _keys.push(payload.noteName);
    KeyStore.__emitChange();
    break;
  case "REMOVE_NOTE":
    _keys = [];
    KeyStore.__emitChange();
    break;
  }
};

module.exports = KeyStore;
