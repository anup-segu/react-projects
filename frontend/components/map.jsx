var React = require('react');

var Map = React.createClass({
  // APIKEY: AIzaSyA--QaFNrxg26Vhlu8aPbHGKyqKf3_42C4
  componentDidMount: function(){
      var mapDOMNode = this.refs.map;
      var mapOptions = {
        center: {lat: 37.7758, lng: -122.435},
        zoom: 13
      };
      this.map = new google.maps.Map(mapDOMNode, mapOptions);
    },

  render: function(){
    return (
      <div className="map" ref="map">

      </div>
    );
  }
});

module.exports = Map;
