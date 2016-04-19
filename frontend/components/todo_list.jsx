var React = require('react');
var TodoStore = require('../stores/todo_store.jsx');
var TodoListItem = require('./todo_list_item.jsx');

var TodoList = React.createClass({
  getInitialState: function () {
    return {
      store: []
    };
  },

  componentDidMount: function () {
    TodoStore.addChangedHandler(this.onChange);
    TodoStore.fetch();
  },

  onChange: function() {
    var todos = TodoStore.all();
    this.setState({store: todos});
  },

  render: function () {
    var todos = this.state.store.map(function(todo) {
      return <TodoListItem key={todo.id} item={todo} />;
    });

    return (
      <div>
        {todos}
      </div>
    );
  }
});

module.exports = TodoList;
