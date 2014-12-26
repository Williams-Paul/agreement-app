/** @jsx React.DOM */

var React = require('react'),
  jQuery = require('../../config/jquery-extends'),
  Bootstrap = require('react-bootstrap'),
  Grid = React.createFactory(Bootstrap.Grid),
  Row = React.createFactory(Bootstrap.Row),
  Col = React.createFactory(Bootstrap.Col),
  PageHeader = React.createFactory(Bootstrap.PageHeader),
  Button = React.createFactory(Bootstrap.Button),
  Input = React.createFactory(Bootstrap.Input);

var ProductForm = React.createClass({
  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input 
          type="text"
          label="Nombre"
          name="name"/>
        <Input 
          type="select"
          label='Unidad'
          defaultValue="unidad"
          name="unit">
          <option value="unidad">Unidad</option>
          <option value="kilo">Kilo</option>
          <option value="litro">Litro</option>
        </Input>
        <Input 
          type="text"
          addonBefore="s/."
          label="Precio Unitario"
          name="unitPrice"/>
        <Input 
          type="text"
          label="Cantidad"
          name="amount"/>
        <Input 
          type="text"
          addonBefore="s/."
          label="Price"
          name="price"/>
        <Input 
          type='submit' 
          value='Submit button'/>
      </form>
    );
  },
  handleSubmit: function(e) {
    e.preventDefault();
    
    var data = jQuery('form').serializeObject();    
    console.log(data);
  }
});

module.exports = ProductForm;