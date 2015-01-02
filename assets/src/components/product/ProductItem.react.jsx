var React = require('react');

var ProductItem = React.createClass({
  render: function() {
    var product = this.props.product;
    
    return (
      <li>{product.name}</li>
    );
  }
});

module.exports = ProductItem;