var React = require('react');

module.exports = React.createClass({
  render: function () {
    var todo = this.props.item;
    return(
      <div key={todo.id} >
        <div key="1">{ todo.title }</div>
        <div key="2">{ todo.body }</div>
      </div>
    );
  }
});
