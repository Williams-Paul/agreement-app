var React = require('react')
  , Bootstrap = require('react-bootstrap')
  , { Grid, Row, Col, PageHeader } = Bootstrap;
  
var ProductForm = require('./ProductForm.jsx');
var ProductList = require('./ProductList.jsx');

var ProductStore = require('../../stores/ProductStore');
var ProductActions = require('../../actions/ProductActions');

/**
 * Retrive the current PRODUCT
 */ 
function getProductState() {
  return {
    allProducts: ProductStore.getProducts()
  }
}; 

var Product = React.createClass({
  
  getInitialState: function() {
    return getProductState();
  },
  
  componentDidMount: function() {
    ProductActions.load();
    
    ProductStore.addChangeListener(this._onChange);
  },
  
  componentWillUnmount: function() {
    ProductStore.removeChangeListener(this._onChange);
  },
  
  render: function() {
    return (
      <Row>
        <Col lg={6} xs={6}>
          <PageHeader>Formulario</PageHeader>
          <ProductForm/>
        </Col>
        <Col lg={6} xs={6}>
          <PageHeader>Lista de compras</PageHeader>
          <ProductList allProducts={this.state.allProducts}/>
        </Col>
      </Row>
    );
  },
  
  _onChange: function() {
    this.setState(getProductState());
  }
});

module.exports = Product;