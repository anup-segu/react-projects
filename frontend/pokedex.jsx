var React = require('react'),
    ReactDOM = require('react-dom'),
    PokemonsIndex = require('./components/pokemons/pokemonsIndex.jsx');

window.PokemonStore = require('./stores/pokemon.js');
window.ClientActions = require('./actions/clientActions.js');

 document.addEventListener('DOMContentLoaded', function () {
   ReactDOM.render(<PokemonsIndex />, document.getElementById('root'));
 });
