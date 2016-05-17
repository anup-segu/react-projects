var React = require('react'),
    ToyIndexItem = require('./toyIndexItem.jsx');

var ToysIndex = React.createClass({

  render: function() {
    if (this.props.toys) {
      var toys = this.props.toys.map(function (toy) {
        return <ToyIndexItem key={toy.id} toy={toy} />;
      });
    }

    return (
      <ul>
        {toys}
      </ul>
    );
  }

});

module.exports = ToysIndex;
