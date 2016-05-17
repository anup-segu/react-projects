var TodoList = require('./components/todo_list.jsx');
var React = require('react');
var ReactDOM = require('react-dom');

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(<TodoList/>, document.getElementById('root'));
});
