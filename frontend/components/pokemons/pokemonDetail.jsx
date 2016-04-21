var React = require('react'),
    PokemonStore = require('../../stores/pokemon.js'),
    ClientActions = require('../../actions/clientActions.js');

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
            <p>Name: {this.state.pokemon.name}</p>
            <p>
              <span>Attack</span>
              <span>:</span>
              <span>{this.state.pokemon.attack}</span>
            </p>
            <p>
              <span>Defense</span>
              <span>:</span>
              <span>{this.state.pokemon.defense}</span>
            </p>
            <p>
              <span>Poke_type</span>
              <span>:</span>
              <span>{this.state.pokemon.poke_type}</span>
            </p>
            <p>
              <span>Moves</span>
              <span>:</span>
              <span>{this.state.pokemon.moves}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = PokemonDetail;
