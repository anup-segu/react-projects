var React = require('react');

var ToyIndexItem = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  handleClick: function(toy) {
    this.context.router.push(
      "pokemon/" + toy.pokemon_id + "/toys/" + toy.id
    );
  },

  render: function() {
    return (
      <li className="toy-list-item"
          onClick={this.handleClick.bind(this, this.props.toy)}>
        <p>
          Name: {this.props.toy.name}
        </p>
        <p>
          Happiness: {this.props.toy.happiness}
        </p>
        <p>
          Price: {this.props.toy.price}
        </p>
      </li>
    );
  }

});

module.exports = ToyIndexItem;
