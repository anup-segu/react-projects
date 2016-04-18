var React = require('react');

var Autocomplete = React.createClass({
  getInitialState: function() {
    return { searchString: "" };
  },

  handleChange: function(event) {
    var value = event.target.value;
    this.setState({ searchString: value });
  },

  clicked: function(event) {
    // console.log(event.target.innerHTML);
    this.setState({ searchString: event.target.innerHTML });
  },

  findMatches: function() {
    var self = this;

    return(
      <ul>{
        this.props.names.map(function (name, idx) {
          if (name.indexOf(self.state.searchString) === 0
            && (self.state.searchString.length > 0)) {
            return <li value={ name } key={ idx } onClick={ self.clicked }>{ name }</li>;
          }
        })
      }
      </ul>
    );
  },

  render: function() {
    return(
      <div>
        <input
          type="text"
          value = { this.state.searchString }
          onChange={ this.handleChange } >
        </input>
        <div> { this.findMatches() } </div>

      </div>
    );
  }
});

module.exports = Autocomplete;
