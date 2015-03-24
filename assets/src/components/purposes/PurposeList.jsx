var React = require('react')
  , ReactPropTypes = React.PropTypes;

var PurposeItem = require('./PurposeItem.jsx');

var PurposeList = React.createClass({
  propTypes: {
    allPurposes: ReactPropTypes.object.isRequired
  },
  render: function() {
    
    if (Object.keys(this.props.allPurposes).length < 1) {
      return null;  
    }
    
    var allPurposes = this.props.allPurposes;
    
    var purposes = [];
    
    for (var key in allPurposes) {
      purposes.push(<PurposeItem key={key} institution={allPurposes[key]} />);
    }
    
    return (
      <ul id="purpose-list">{purposes}</ul>
    );
  }
});

module.exports = PurposeList;