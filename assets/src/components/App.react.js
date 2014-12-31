/** @jsx React.DOM */

var React = require('react'),
  Bootstrap = require('react-bootstrap'),
  Grid = React.createFactory(Bootstrap.Grid),
  Row = React.createFactory(Bootstrap.Row),
  Col = React.createFactory(Bootstrap.Col),
  PageHeader = React.createFactory(Bootstrap.PageHeader);

var ProductForm = React.createFactory(require('./product/ProductForm.react'));
var ProductList = React.createFactory(require('./product/ProductList.react'));

var ProductStore = require('../stores/ProductStore');
var ProductActions = require('../actions/ProductActions');


/**
 * Retrive the current PRODUCT
 */ 
function getProductState() {
  return {
    allProducts: ProductStore.getProducts()
  }
}; 

var App = React.createClass({
  
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
     <Grid>
      <Row>
        <Col lg={6} xs={6}>
          <PageHeader>Formulario</PageHeader>
          <ProductForm/>
        </Col>
        <Col lg={6} xs={6}>
          <PageHeader>Lista de compras</PageHeader>
          <ProductList 
            allProducts={this.state.allProducts}/>
        </Col>
      </Row>
     </Grid>
   ); 
  },
  _onChange: function() {
    this.setState(getProductState());
  }
});

module.exports = App;
