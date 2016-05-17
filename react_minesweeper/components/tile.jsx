var React = require('react');
var Minesweeper = require('./minesweeper.js');

var Tile = React.createClass({

  identifyValue: function(){
    if (this.props.tile.flagged) {
      return "F";
    } else if (this.props.tile.explored && this.props.tile.bombed) {
      return "B";
    } else if (this.props.tile.explored) {
      return this.props.tile.adjacentBombCount() > 0 ? this.props.tile.adjacentBombCount() : "";
    } else {
      return "";
    }
  },

  handleClick: function(event){
    var flag = event.altKey;
    this.props.updateGame(this.props.tile, flag);
  },

  toggleClass: function(el){
    if (this.props.tile.explored){
      return "tile explored";
    } else {
      return "tile unexplored";
    }
  },

  render: function() {
    return(
      <div className={ this.toggleClass() } onClick={ this.handleClick } >
         { this.identifyValue() }
      </div>
    );
  }
});

module.exports = Tile;
