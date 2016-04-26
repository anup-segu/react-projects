var React = require('react');
var BenchStore = require('../stores/bench.js');
var ClientActions = require('../actions/client_actions.js');
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;

var Map = React.createClass({
  // APIKEY: AIzaSyA--QaFNrxg26Vhlu8aPbHGKyqKf3_42C4
  componentDidMount: function(){
    var mapDOMNode = this.refs.map;
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };

    this.markers = {};

    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.geocoder = this.map.Geocoder;
    this.infowindow = this.map.InfoWindow;

    this.map.addListener("idle", function(){
      var latLngBounds = this.getBounds();
      var ne = latLngBounds.getNorthEast();
      var sw = latLngBounds.getSouthWest();

      var bounds = {
        northEast: { "lat": ne.lat(), "lng": ne.lng() },
        southWest: { "lat": sw.lat(), "lng": sw.lng() }
      };

      ClientActions.fetchbenches(bounds);
    });

    this.map.addListener("dblclick", function (e){
      this.latlng = {lat: e.latLng.lat(), lng: e.latLng.lng()};
    }.bind(this));

    BenchStore.addListener(this._onChange);
  },

  _clearMarkers: function() {
    Object.keys(this.markers).forEach( function(benchID){
      this.markers[benchID].setMap(null);
      delete this.markers[benchID];
    }.bind(this));
  },

  _onChange: function(){
    this._clearMarkers();
    var benches = BenchStore.all();
    Object.keys(benches).forEach(function (benchID){
      var marker = new google.maps.Marker({
        position: {
            lat: benches[benchID].lat,
            lng: benches[benchID].lng
        },
        title: benches[benchID].description
      });
      this.markers[benchID] = marker;
    }.bind(this));

    Object.keys(this.markers).forEach(function (benchID){
      if (benches[benchID] !== undefined) {
        this.markers[benchID].setMap(this.map);
      }
    }.bind(this));
  },

  _handleClick: function () {
    hashHistory.push({
      pathname: "benches/new",
      query: this.latlng
    });
  },

  render: function(){
    return (
      <div className="map" ref="map" onDoubleClick={this._handleClick}>

      </div>
    );
  }
});

module.exports = Map;
