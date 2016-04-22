var React = require('react');
var ReactDOM = require('react-dom');
var Search = require('./components/search.jsx');
// window.ApiUtil = require('./util/api_util.js');
// window.BenchStore = require('./stores/bench.js');


document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Search />,
    document.getElementById('root')
  );
});
