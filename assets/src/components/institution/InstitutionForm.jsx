var React = require('react')
  , ReactPropTypes = React.PropTypes;

var jQuery = require('../../config/jquery-extends')
  , Bootstrap = require('react-bootstrap')
  , { Grid, Row, Col, PageHeader, Button, Input } = Bootstrap;

var InstitutionForm = React.createClass({

  propTypes: {
    id: ReactPropTypes.string,
    placeholder: ReactPropTypes.string,
    onSave: ReactPropTypes.func.isRequired,
    value: ReactPropTypes.string
  },

  getInitialState: function() {
    return {
      value: this.props.value || ''
    };
  },
  
  render: function() {
    return (
      <form 
        onSubmit={this._onSave}
        id={this.props.id}>
        <Input 
          placeholder={this.props.placeholder}
          type="text"
          label=""
          name="name"
          defaultValue={this.state.value}/>
        <Input
          type='submit'
          value='Guardar'/>
      </form>
    );
  },
  
  _onSave: function(e) {
    e.preventDefault();
    var data = jQuery('form#' + this.props.id).serializeObject();
    this.props.onSave(data);
    jQuery('form')[0].reset();
  }
});

module.exports = InstitutionForm;
