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
  }
};

module.exports = KeyActions;
