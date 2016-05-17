var React = require('react');
var Board = require('./board.jsx');
var Minesweeper = require('./minesweeper.js');

var Game = React.createClass({
  getInitialState: function() {
    return {
      board: new Minesweeper.Board(9, 9)
    };
  },

  restartGame: function(){
    this.setState({board: new Minesweeper.Board(9, 9)});
  },

  updateGame: function(tile, flag) {
    if (flag) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }

    this.setState({ board: this.state.board });
  },

  showBoard: function() {
    return (
      <div>
        <Board
          board={ this.state.board }
          updateGame={ this.updateGame } />
      </div>
    );
  },

  componentDidUpdate: function(){
    if (this.state.board.won()) {
      alert("You win!");
      this.restartGame();
    } else if (this.state.board.lost()) {
      alert("You lose!");
      this.restartGame();
    }
  },

  render: function() {
    return (
      this.showBoard()
    );
  }
});


module.exports = Game;
