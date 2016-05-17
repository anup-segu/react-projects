var React = require('react');
var BenchStore = require('../stores/bench.js');

var Index = React.createClass({
  getInitialState: function(){
    return { benches: BenchStore.all()};
  },

  componentDidMount: function(){
    BenchStore.addListener(this._onChange);
  },

  _onChange: function(){
    this.setState({ benches: BenchStore.all() });
  },

  render: function(){
    var benchElements = Object.keys(this.state.benches).map(function (benchID){
      return <li key={benchID}>{ this.state.benches[benchID].description }</li>;
    }.bind(this));

    return (
      <div>
        <ul>
          { benchElements }
        </ul>
      </div>
    );
  }
});

module.exports = Index;
