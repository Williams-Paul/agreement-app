/** @jsx React.DOM */

var React = require('react');
var ReactPropTypes = React.PropTypes;
var ProductItem = require('./ProductItem.react');

var ProductList = React.createClass({
  propTypes: {
    allProducts: ReactPropTypes.object.isRequired
  },
  render: function() {
    
    if (Object.keys(this.props.allProducts).length < 1) {
      return null;  
    }
    
    var allProducts = this.props.allProducts;
    var products = [];
    
    for (var key in allProducts) {
      products.push(<ProductItem key={key} product={allProducts[key]} />);
    }
    
    return (
      <ul id="product-list">{products}</ul>
    );
  }
});

module.exports = ProductList;