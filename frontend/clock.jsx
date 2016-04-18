var React = require('react');

var Clock = React.createClass({

  getInitialState: function(){
    return {
      date : new Date(),
      weather: '',
      temperature: ''};
  },

  componentDidMount: function(){
    this.interval = setInterval(this.tick, 1000);
    this.geo();
  },

  geo: function(){
    var geo = navigator.geolocation;
    var self = this;
    function getCoords(pos){
      var latitude = pos.coords.latitude;
      var longitude = pos.coords.longitude;
      self.queryWeather(latitude, longitude);
    }
    geo.getCurrentPosition(getCoords);
  },

  queryWeather: function(latitude, longitude){
    var request = new XMLHttpRequest();
    var urlString = "http://api.openweathermap.org/data/2.5/weather?lat=" +
    latitude +"&lon=" + longitude + "&appid=645c5d39c7603f17e23fcaffcea1a3c1";
    request.open('GET', urlString, true);

    request.onload = function(data) {
      if (request.status >= 200 && request.status < 400) {
        this.weather(JSON.parse(data.currentTarget.response));
      } else {
        // We reached our target server, but it returned an error
        console.log("bad request");
      }
    }.bind(this);

    request.onerror = function() {
      console.log("Error in queryWeather");
    };

    request.send();
  },

  weather: function(target){
    this.setState({ weather: target.weather[0].description });
    this.setState({ temperature: target.main.temp });
  },

  tick: function(){
    this.setState({date: new Date()});
  },

  componentWillUnmount: function(){
    clearInterval(this.interval);
  },

  render: function(){
    return (
      <div>
        <div>{this.state.date.toString()}</div>
        <div>{this.state.temperature}</div>
        <div>{this.state.weather}</div>
      </div>
    );
  }
});

module.exports = Clock;
