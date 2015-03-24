var React = require('react')
  , ReactPropTypes = React.PropTypes;

var PurposeActions = require('../../actions/PurposeActions');
var PurposeForm = require('./PurposeForm.jsx');

var cx = require('react/lib/cx');

var PurposeItem = React.createClass({

  propTypes: {
    purpose: ReactPropTypes.object.isRequired
  },
  
  getInitialState: function() {
    return {
      isEditing: false
    };
  },

  render: function() {
    var purpose = this.props.purpose;
    var input;
    
    if(this.state.isEditing) {    
      input = 
        <PurposeForm 
          className="edit"
          onSave={this._onSave}
          value={purpose.name}
          id={'purpose-' + purpose.id + '-form'}
        />;
    }
    
    return (
      <li>
        {purpose.name}
        <div className="view">
          <label onDoubleClick={this._onDoubleClick}>
            {purpose.name}
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
    PurposeActions.update( this.props.purpose.id, params);
    this.setState({isEditing: false});
  },
  
  _onDestroyClick: function() {
    PurposeActions.destroy(this.props.purpose.id);
  }
});

module.exports = PurposeItem;
