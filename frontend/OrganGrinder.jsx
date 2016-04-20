var KeyListeners = require("./util/KeyListener");
var React = require("react");
var ReactDOM = require("react-dom");
var Organ = require("./components/Organ");


document.addEventListener("DOMContentLoaded", function() {
  var content = document.getElementById('content');
  ReactDOM.render(<Organ />, content);
});
