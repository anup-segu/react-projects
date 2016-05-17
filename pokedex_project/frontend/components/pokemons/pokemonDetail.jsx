var React = require('react'),
    PokemonStore = require('../../stores/pokemon.js'),
    ClientActions = require('../../actions/clientActions.js'),
    ToysIndex = require('../toys/toysIndex.jsx');

var PokemonDetail = React.createClass({
  getStateFromStore: function() {
    return PokemonStore.find(parseInt(this.props.params.pokemonId));
  },

  getInitialState: function() {
    return { pokemon: {}};
  },

  componentDidMount: function () {
    ClientActions.fetchPokemon(parseInt(this.props.params.pokemonId));
    this.removeToken = PokemonStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.removeToken.remove();
  },

  componentWillReceiveProps: function() {
    ClientActions.fetchPokemon(parseInt(this.props.params.pokemonId));
  },

  _onChange: function () {
    this.setState({
      pokemon: this.getStateFromStore()
    });
  },

  render: function() {
    return (
      <div>
        <div className="pokemon-detail-pane">
          <div className="detail">
            <img src={this.state.pokemon.image_url} />
            <p>
              Name: {this.state.pokemon.name}
            </p>
            <p>
              Attack: {this.state.pokemon.attack}
            </p>
            <p>
              Defense: {this.state.pokemon.defense}
            </p>
            <p>
              Poke_type: {this.state.pokemon.poke_type}
            </p>
            <p>
              Moves: {this.state.pokemon.moves}
            </p>
          </div>
          <div>
            <h2 className="detail-header">Toys</h2>
            <ToysIndex toys={this.state.pokemon.toys} />
          </div>
        </div>

        <div>
          {this.props.children}
        </div>
      </div>
    );
  }

});

module.exports = PokemonDetail;
