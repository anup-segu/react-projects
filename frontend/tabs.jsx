var React = require('react');

var Tabs = React.createClass({
  getInitialState: function() {
    return { focused: 0 };
  },
  header: function(m, index, self) {
    return <li onClick={self.clicked.bind(self, index)}>
      <h1>{m.title}</h1>
      <article>{m.content}</article>
      </li>;
  },
  clicked: function (index) {
    this.setState({focused: index});
  },
  render: function() {
    var self = this;

    return(
      <div>
        <ul>{ this.props.items.map(function(m, index){
            if(self.state.focused == index) {
              return self.header(m, index, self);
            }
            return <li onClick={self.clicked.bind(self, index)}><h1>{m.title}</h1></li>;
          })
          }
        </ul>
      </div>
    );
  }

});


module.exports = Tabs;
