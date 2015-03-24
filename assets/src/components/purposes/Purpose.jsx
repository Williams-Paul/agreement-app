var React = require('react')
  , Bootstrap = require('react-bootstrap')
  , { Grid, Row, Col, PageHeader } = Bootstrap;

var PurposeForm = require('./PurposeForm.jsx')
  , PurposeList = require('./PurposeList.jsx');

var PurposeStore = require('../../stores/PurposeStore');
var PurposeActions = require('../../actions/PurposeActions');

/**
 * Retrive the current Purpose
 */ 
function getPurposeState() {
  return {
    allPurposes: PurposeStore.getPurposes()
  }
}; 

var Purpose = React.createClass({
  
  getInitialState: function() {
    return getPurposeState();
  },
  
  componentDidMount: function() {
    PurposeActions.load();
    PurposeStore.addChangeListener(this._onChange);
  },
  
  componentWillUnmount: function() {
    PurposeStore.removeChangeListener(this._onChange);
  },
  
  render: function() {
    return (
      <Row>
        <Col lg={12} xs={12}>
          <PageHeader>Propósitos</PageHeader>
        </Col>
        <Col lg={6} xs={6}>
          <PurposeForm 
            placeholder="Nombre de purpose."
            onSave={this._onSave} 
            id={'purpose-form'}/>
        </Col>
        <Col lg={6} xs={6}>
          <PurposeList allPurposes={this.state.allPurposes}/>
        </Col>
      </Row>
    );
  },
  
  _onChange: function() {
    this.setState(getPurposeState());
  },
  
  _onSave: function(data) {
    if(data) {
      PurposeActions.create(data);
    }
  }
});

module.exports = Purpose;
