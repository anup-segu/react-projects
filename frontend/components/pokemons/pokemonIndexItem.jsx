var React = require('react');

var PokemonIndexItem = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  handleClick: function(pokemon) {
    this.context.router.push("pokemon/" + pokemon.id);
  },

  render: function() {
    return (
      <li
        className="poke-list-item"
        onClick={this.handleClick.bind(this, this.props.pokemon)}>
        <p>Name: {this.props.pokemon.name}</p>
        <p>Poke Type: {this.props.pokemon.poke_type}</p>
      </li>
    );
  }

});

module.exports = PokemonIndexItem;
