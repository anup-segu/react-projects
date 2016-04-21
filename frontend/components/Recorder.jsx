var React = require('react');
var KeyStore = require('../stores/KeyStore');
var Track = require('../util/Track');

var Recorder = React.createClass ({
  getInitialState: function(){
    return ({
      isRecording: false,
      track: new Track()
    });
  },

  _keysChanged: function(){
    if(this.state.isRecording) {
      this.state.track.addNotes(KeyStore.all());
    }
  },

  componentDidMount: function() {
    KeyStore.addListener(this._keysChanged);
  },

  recordToggle: function() {
    if(this.state.isRecording){
      this.state.track.stopRecording();
      console.log(this.state.track);
      this.setState({isRecording: false});
    } else {
      this.state.track.startRecording();
      this.setState({isRecording: true});
    }
  },

  playTrack: function() {
    this.state.track.play();
  },

  render: function() {
    var text, buttons;
    if(this.state.isRecording){
      text = "Stop Recording";
      buttons = <button onClick={this.recordToggle}>{text}</button>;
    } else {
      text = "Start Recording";
      buttons =
        <div>
          <button onClick={this.recordToggle}>{text}</button>
          <button onClick={this.playTrack}>Play</button>
        </div>;
    }

    return(
      <div>
        {buttons}
      </div>
    );
  }
});

module.exports = Recorder;
