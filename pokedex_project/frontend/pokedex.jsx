var React = require('react'),
    ReactDOM = require('react-dom'),
    PokemonsIndex = require('./components/pokemons/pokemonsIndex.jsx'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    PokemonDetail = require('./components/pokemons/pokemonDetail.jsx'),
    HashHistory = require('react-router').hashHistory,
    ToyDetail = require('./components/toys/toyDetail.jsx');

var App = React.createClass({
  childContextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getChildContext: function() {
    return {router: HashHistory};
  },

  render: function() {
    return (
      <div id="pokedex">
        <div className="pokemon-index-pane">
          <PokemonsIndex />
        </div>
        <div>
          { this.props.children }
        </div>
      </div>
    );
  }
});

var routes = (
  <Route path="/" component={App}>
    <Route path="pokemon/:pokemonId" component={PokemonDetail}>
      <Route path="toys/:toyId" component={ToyDetail}>
      </Route>
    </Route>
  </Route>
);

document.addEventListener('DOMContentLoaded', function () {
   ReactDOM.render(
     <Router history={HashHistory}>
       {routes}
     </Router>
       , document.getElementById('root'));
 });
