var dispatcher = require("../dispatcher/Dispatcher");

var KeyActions = {
  keyPressed: function (noteName) {
    dispatcher.dispatch({
      actionType: "ADD_NOTE",
      noteName: noteName
    });
  },

  keyReleased: function (noteName) {
    dispatcher.dispatch({
      actionType: "REMOVE_NOTE",
      noteName: noteName
    });
  },

  playKeys: function (noteNames) {
    var self = this;
    noteNames.forEach( function(note) {
      self.keyPressed(note);
    });
  }

};

module.exports = KeyActions;
