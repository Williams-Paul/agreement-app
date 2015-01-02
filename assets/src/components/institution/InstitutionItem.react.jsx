var React = require('react');

var InstitutionItem = React.createClass({
  render: function() {
    var institution = this.props.institution;
    
    return (
      <li>{institution.name}</li>
    );
  }
});

module.exports = InstitutionItem;