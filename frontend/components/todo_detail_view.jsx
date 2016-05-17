var React = require('react');
var TodoStore = require('../stores/todo_store.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {render: false};
  },

  handleDestroy: function() {
    TodoStore.destroy(this.props.item.id);
  },

  handleShow: function() {
    if (this.state.render === false) {
      this.setState({render: true});
    } else {
      this.setState({render: false});
    }
  },

  render: function() {
    var todo = this.props.item;
    if (this.state.render) {
      return (
        <div>
          {todo.body}
          <button onClick={this.handleDestroy}>{"Destroy"}</button>
          <button onClick={this.handleShow}>{"Collapse"}</button>
        </div>
      );
    } else {
      return (
        <button onClick={this.handleShow}>{"View"}</button>
      );
    }
  }
});
