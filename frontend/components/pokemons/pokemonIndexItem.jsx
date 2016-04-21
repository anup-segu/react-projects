var React = require('react');

var PokemonIndexItem = React.createClass({

  render: function() {
    return (
      <li className="poke-list-item">
        <p>
          {this.props.pokemon.name}
        </p>
        <p>
          {this.props.pokemon.poke_type}
        </p>
      </li>
    );
  }

});

module.exports = PokemonIndexItem;
