var React = require('react')
  , ReactPropTypes = React.PropTypes
  , jQuery = require('../../config/jquery-extends')
  
  , Bootstrap = require('react-bootstrap')
  , Grid = React.createFactory(Bootstrap.Grid)
  , Row = React.createFactory(Bootstrap.Row)
  , Col = React.createFactory(Bootstrap.Col)
  , PageHeader = React.createFactory(Bootstrap.PageHeader)
  , Button = React.createFactory(Bootstrap.Button)
  , Input = React.createFactory(Bootstrap.Input);

var InstitutionActions = require('../../actions/InstitutionActions');

var InstitutionForm = React.createClass({

  getInitialState: function() {
    return {
      value: ''
    };
  },
  
  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input 
          type="text"
          label="Nombre"
          name="name"
          defaultValue={this.state.value}/> 
        <Input
          type='submit'
          value='Submit button'/>
      </form>
    );
  },
  handleSubmit: function(e) {
    e.preventDefault();
    
    // Serialize form
    var data = jQuery('form').serializeObject();    
    InstitutionActions.create(data);
    jQuery('form')[0].reset();
  }
});

module.exports = InstitutionForm;
