var React = require('react');
var TodoStore = require('../stores/todo_store.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      title: "",
      body: ""
    };
  },

  updateTitle: function(e) {
    var title = e.currentTarget.value;
    this.setState({title: title});
  },

  updateBody: function(e) {
    var body = e.currentTarget.value;
    this.setState({body: body});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    TodoStore.create(this.state);
    this.setState({
      title: "",
      body: ""
    });
  },

  render: function() {
    return (
      <div>
        <h2>New Todo</h2>
        <form onSubmit={this.handleSubmit} >
          <label> Title
          <input type="text" value={ this.state.title} onChange= { this.updateTitle } /></label>

          <label> Body
          <input type="text" value={ this.state.body} onChange= { this.updateBody } /></label>

          <input type="submit" value="Add Todo" />
        </form>
      </div>
    );
  }
});
