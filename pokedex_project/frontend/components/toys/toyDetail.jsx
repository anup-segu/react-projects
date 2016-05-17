var React = require('react'),
    ToyStore = require('../../stores/toy.js'),
    ClientActions = require('../../actions/clientActions.js');

var ToyDetail = React.createClass({
  getInitialState: function() {
    return { toy: {}};
  },

  getStateFromStore: function() {
    return ToyStore.find(parseInt(this.props.params.toyId));
  },

  componentDidMount: function() {
    ClientActions.fetchToy(parseInt(this.props.params.toyId));
    this.removeToken = ToyStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.removeToken.remove();
  },

  componentWillReceiveProps: function() {
    ClientActions.fetchToy(parseInt(this.props.params.toyId));
  },

  _onChange: function () {
    this.setState({
      toy: this.getStateFromStore()
    });
  },

  render: function() {
    if (this.state.toy === undefined) {
      return <div></div>;
    }
    return (
      <div className="detail">
        <img className="toy-image" src={this.state.toy.image_url} />
        <p>Name: {this.state.toy.name}</p>
        <p>Happiness: {this.state.toy.happiness}</p>
        <p>Price: {this.state.toy.price}</p>
      </div>
    );
  }

});

module.exports = ToyDetail;
