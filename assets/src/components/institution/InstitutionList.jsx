/**
 * InstitutionList Component
 */

var React = require('react')
  , ReactPropTypes = React.PropTypes;

var InstitutionItem = require('./InstitutionItem.jsx');

var InstitutionList = React.createClass({

  propTypes: {
    allInstitutions: ReactPropTypes.object.isRequired
  },

  render: function() {

    if (Object.keys(this.props.allInstitutions).length < 1) {
      return null;
    }

    var allInstitutions = this.props.allInstitutions;
    var institutions = [];

    for (var key in allInstitutions) {
      institutions.push(<InstitutionItem key={key} institution={allInstitutions[key]} />);
    }

    return (
      <ul id="institution-list">{institutions}</ul>
    );
  }
});

module.exports = InstitutionList;
