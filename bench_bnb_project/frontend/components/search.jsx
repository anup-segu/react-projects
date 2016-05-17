var React = require('react');
var Map = require('./map.jsx');
var Index = require('./index.jsx');

var Search = React.createClass({

  render: function() {
    

    return (
      <div>
        <Map />
        <Index />
      </div>
    );
  }

});

module.exports = Search;
