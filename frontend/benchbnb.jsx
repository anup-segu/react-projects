var React = require('react');
var ReactDOM = require('react-dom');
var Index = require('./components/index.jsx');
// window.ApiUtil = require('./util/api_util.js');
// window.BenchStore = require('./stores/bench.js');


document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Index />,
    document.getElementById('root')
  );
});
