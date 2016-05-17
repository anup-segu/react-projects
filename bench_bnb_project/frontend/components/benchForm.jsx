var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ClientActions = require('../actions/client_actions.js');

var BenchForm = React.createClass({
  mixins: [LinkedStateMixin],

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  blankAtttrs: {
    description: "",
    seating: "",
    lat: "",
    lng: ""
  },

  getInitialState: function(){
    return this.blankAtttrs;
  },

  componentDidMount: function(){
    if (this.props.location.query.lat) {
      this.setState({
        lat: this.props.location.query.lat,
        lng: this.props.location.query.lng
      });
    }
  },

  createBench: function(event){
    event.preventDefault();

    var bench = {};
    Object.keys(this.state).forEach(function (key){
      bench[key] = this.state[key];
    }.bind(this));

    ClientActions.createBench(bench, function(id){
      this.context.router.push("/");
    }.bind(this));

    this.setState(this.blankAtttrs);
  },

  render: function() {
    return (
      <form onSubmit={this.createBench}>
        <div>
          <label htmlFor="description_field">Description: </label>
          <input
            type="text"
            id="description_field"
            valueLink={this.linkState("description")}></input>
        </div>

        <div>
          <label htmlFor="seating_field"> Number of Seats: </label>
          <input
            type="text"
            id="seating_field"
            valueLink={this.linkState("seating")}></input>
        </div>

        <div>
          <label htmlFor="latitude_field"> Latitude: </label>
          <input
            type="text"
            id="latitude_field"
            valueLink={this.linkState("lat")} disabled></input>
        </div>

        <div>
          <label htmlFor="longitude_field"> Longitude: </label>
          <input
            type="text"
            id="longitude_field"
            valueLink={this.linkState("lng")} disabled></input>
        </div>

        <button>Create Bench</button>
      </form>
    );
  }

});

module.exports = BenchForm;
