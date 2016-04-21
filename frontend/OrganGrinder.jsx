var KeyListeners = require("./util/KeyListener");
var React = require("react");
var ReactDOM = require("react-dom");
var Organ = require("./components/Organ");
var Recorder = require("./components/Recorder");

document.addEventListener("DOMContentLoaded", function() {
  var content = document.getElementById('content');
  ReactDOM.render(
    <div>
      <Organ />
      <Recorder />
    </div>
    , content);
});
