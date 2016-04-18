var React = require('react');
var ReactDOM = require('react-dom');
var Tabs = require('./frontend/tabs.jsx');

var items = [
  {title: 'Home', content: 'Something'},
  {title: 'Services', content: 'Something about Services'},
  {title: 'About', content: 'Something about About'},
  {title: 'Contact Us', content: 'Something about Contact Us'},
];


document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Tabs items={ items } />,
    document.getElementById('main')
  );
});
