var React = require('react'),
    PokemonStore = require('../../stores/pokemon.js'),
    ClientActions = require('../../actions/clientActions.js'),
    PokemonIndexItem = require('./pokemonIndexItem.jsx');

var PokemonsIndex = React.createClass({
  getInitialState: function () {
    return {
      pokemons: PokemonStore.all()
    };
  },

  componentDidMount : function () {
    ClientActions.fetchAllPokemons();
    this.removeToken = PokemonStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.removeToken.remove();
  },

  _onChange: function () {
    this.setState({
      pokemons: PokemonStore.all()
    });
  },

  render: function() {
    var pokemonList = this.state.pokemons.map(function (pokemon) {
      return (
        <PokemonIndexItem key={pokemon.id} pokemon={pokemon}/>
      );
    });

    return (
      <div>
        <ul>
          {pokemonList}
        </ul>
      </div>
    );
  }

});

module.exports = PokemonsIndex;
