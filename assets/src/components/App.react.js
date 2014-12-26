/** @jsx React.DOM */

var React = require('react'),
  Bootstrap = require('react-bootstrap'),
  Grid = React.createFactory(Bootstrap.Grid),
  Row = React.createFactory(Bootstrap.Row),
  Col = React.createFactory(Bootstrap.Col),
  PageHeader = React.createFactory(Bootstrap.PageHeader);

var ProductForm = React.createFactory(require('./product/ProductForm.react'));

var App = React.createClass({
  render: function() {
   return (
     <Grid>
      <Row>
        <Col lg={12} xs={12}>
          <PageHeader>Formulario</PageHeader>
          <ProductForm/>
        </Col>
      </Row>
     </Grid>
   ); 
  }
});

module.exports = App;