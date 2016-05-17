var KeyActions = require("../actions/KeyActions.js");

var Track = function(options){
  this.defaults = {
    name: "",
    roll: []
  };

  for (var attrname in options) {
    this.defaults[attrname] = options[attrname];
  }
};


Track.prototype.startRecording = function() {
  this.defaults.roll = [];
  this.time = new Date();
};

Track.prototype.play = function() {

  var playBackStartTime = new Date().getTime();
  var rollCounter = 0;
  var self = this;

  var intervalID = setInterval(function() {
    if (rollCounter < self.defaults.roll.length) {
      // console.log(self.defaults.roll[rollCounter].timeSlice + " time slice");
      // console.log(new Date().getTime() - playBackStartTime + " difference");
      if(new Date().getTime() - playBackStartTime > self.defaults.roll[rollCounter].timeSlice){
        KeyActions.keyReleased();
        rollCounter+=1;
        // console.log("next key");
        // playBackStartTime = new Date() - playBackStartTime;
      } else {
        // playBackStartTime += 10;
        KeyActions.playKeys(self.defaults.roll[rollCounter].notes);
        // console.log("same key");
      }
    } else {
      KeyActions.keyReleased();
      stopSetInterval();
      // console.log("break out");
    }
  }, 1);

  var stopSetInterval = function() {
    clearInterval(intervalID);
  };

};

Track.prototype.addNotes = function(noteNames) {
  var timeSlice = (new Date() - this.time);
  var notes = noteNames;
  this.defaults.roll.push({notes: notes, timeSlice: timeSlice});
};

Track.prototype.stopRecording = function() {
  this.addNotes([]);
};

module.exports = Track;
