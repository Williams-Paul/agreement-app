var React = require('react')
  , ReactPropTypes = React.PropTypes;

var InstitutionActions = require('../../actions/InstitutionActions');

var InstitutionItem = React.createClass({

  propTypes: {
    institution: ReactPropTypes.object.isRequired
  },

  render: function() {
    var institution = this.props.institution;

    return (
      <li>
        {institution.name}
        <button
          className="btn btn-danger btn-xs"
          onClick = {this._onDestroyClick}>
          x
        </button>
      </li>
    );
  },

  _onDestroyClick: function() {
    InstitutionActions.destroy(this.props.institution.id);
  }
});

module.exports = InstitutionItem;
