var React = require('react');
var ReactDOM = require('react-dom');
var Search = require('./components/search.jsx');
var BenchForm = require('./components/benchForm.jsx');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var App = React.createClass({
  render: function() {
    return (
      <div>
        <header><h1>Bench BNB</h1></header>
        { this.props.children }
      </div>
    );
  }

});

var AppRouter = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Search}/>
      <Route path="/bench/new" component={BenchForm}></Route>
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(AppRouter, document.getElementById('root'));
});
