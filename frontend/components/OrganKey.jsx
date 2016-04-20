var React = require('react');
var Note = require('../util/Note');
var KeyStore = require('../stores/KeyStore');
var TONES = require('../constants/Tone');

var OrganKey = React.createClass({
  getInitialState: function() {
    var freq = TONES[this.props.noteName];
    return { note: new Note(freq), playing: false };
  },

  _keysChanged: function(){
    if (KeyStore.has_key(this.props.noteName)) {
      this.setState({playing: true});
      this.state.note.start();
    } else {
      this.setState({playing: false});
      this.state.note.stop();
    }
  },

  componentDidMount: function () {
    KeyStore.addListener(this._keysChanged);
  },

  componentWillUnmount: function () {

  },

  render: function() {
    if (KeyStore.has_key(this.props.noteName)) {
      console.log("yes");
      var className = "key playing";
    } else {
      console.log("no");
      className = "key";
    }

    var colors = [
      "#66ffff",
      "#47d147",
      "#ffcc66",
      "#ff66ff",
      "#ffcc00"
    ];

    var num = Math.floor(Math.random() * colors.length);

    var randomColors = {
      backgroundColor:  colors[num]
    };

    return (
      <div style={randomColors} className="key" ></div>
    );
  }
});


module.exports = OrganKey;
