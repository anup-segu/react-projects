var React = require("react");
var OrganKey = require("./OrganKey");
var TONES = require("../constants/Tone");


var Organ = React.createClass({
  allKeys: function() {
    return (
      Object.keys(TONES).map(function (tone, idx) {
        return <OrganKey noteName={tone} key={idx} />;
      })
    );
  },

  render: function() {
    return(
      <div>
        { this.allKeys() }
      </div>
    );
  }
});

module.exports = Organ;
