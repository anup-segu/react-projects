var React = require('react');
var TodoStore = require('../stores/todo_store.jsx');
var TodoView = require('./todo_detail_view.jsx');

module.exports = React.createClass({

  handleDone: function() {
    TodoStore.toggleDone(this.props.item.id);
  },

  render: function () {
    var todo = this.props.item;
    var todoStatus = this.props.item.done === true ? "Undo" : "Done";
    return(
      <div key={todo.id} >
        <div key="1">{ todo.title }</div>
        <TodoView item={this.props.item}/>
        <button onClick={this.handleDone}>{todoStatus}</button>
      </div>
    );
  }
});
