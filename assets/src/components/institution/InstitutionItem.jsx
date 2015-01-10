var React = require('react')
  , ReactPropTypes = React.PropTypes;

var InstitutionActions = require('../../actions/InstitutionActions');
var InstitutionForm = require('./InstitutionForm.jsx');

var cx = require('react/lib/cx');

var InstitutionItem = React.createClass({

  propTypes: {
    institution: ReactPropTypes.object.isRequired
  },
  
  getInitialState: function() {
    return {
      isEditing: false
    };
  },

  render: function() {
    var institution = this.props.institution;
    var input;
    
    if(this.state.isEditing) {    
      input = 
        <InstitutionForm 
          className="edit"
          onSave={this._onSave}
          value={institution.name}
          id={'institution-' + institution.id + '-form'}
        />;
    }
    
    return (
      <li>
        {institution.name}
        <div className="view">
          <label onDoubleClick={this._onDoubleClick}>
            {institution.name}
          </label>
          
          <div className="pull-right">
            <button
              className="btn btn-danger btn-xs"
              onClick = {this._onDestroyClick}>
              x
            </button>
          </div>
          {input} 
        </div>
      </li>
    );
  },
  
  _onDoubleClick: function() {
    this.setState({isEditing: true})
  },
  
  _onSave: function(params) {
    InstitutionActions.update( this.props.institution.id, params);
    this.setState({isEditing: false});
  },
  
  _onDestroyClick: function() {
    InstitutionActions.destroy(this.props.institution.id);
  }
});

module.exports = InstitutionItem;
