var React = require('react');
var Minesweeper = require('./minesweeper.js');
var Tile = require('./tile.jsx');

var Board = React.createClass({
  generateTiles: function() {
    var self = this;

    return (
      <div>
        { this.props.board.grid.map(function (row, idx1){
            return (
              <div key = { idx1 } className = { "row "}>
                {
                  row.map(function (tile, idx2) {
                    return (
                      <Tile
                        tile= { self.props.board.grid[idx1][idx2] }
                        key= { [idx1, idx2] }
                        updateGame = { self.props.updateGame } />
                    );
                  })
                }
              </div>
            );
        })}
      </div>
    );
  },

  render: function() {
    return (
      this.generateTiles()
    );
  }
});

module.exports = Board;
