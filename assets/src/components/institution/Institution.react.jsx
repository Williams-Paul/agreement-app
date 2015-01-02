var React = require('react')
  , Bootstrap = require('react-bootstrap')
  , Grid = React.createFactory(Bootstrap.Grid)
  , Row = React.createFactory(Bootstrap.Row)
  , Col = React.createFactory(Bootstrap.Col)
  , PageHeader = React.createFactory(Bootstrap.PageHeader);

var InstitutionForm = React.createFactory(require('./InstitutionForm.react.jsx'));
var InstitutionList = React.createFactory(require('./InstitutionList.react.jsx'));

var InstitutionStore = require('../../stores/InstitutionStore');
var InstitutionActions = require('../../actions/InstitutionActions');

/**
 * Retrive the current Institution
 */ 
function getInstitutionState() {
  return {
    allInstitutions: InstitutionStore.getInstitutions()
  }
}; 

var Institution = React.createClass({
  
  getInitialState: function() {
    return getInstitutionState();
  },
  
  componentDidMount: function() {
    InstitutionActions.load();
    InstitutionStore.addChangeListener(this._onChange);
  },
  
  componentWillUnmount: function() {
    InstitutionStore.removeChangeListener(this._onChange);
  },
  
  render: function() {
    return (
      <Row>
        <Col lg={6} xs={6}>
          <PageHeader>Formulario</PageHeader>
          <InstitutionForm/>
        </Col>
        <Col lg={6} xs={6}>
          <PageHeader>Institutciones</PageHeader>
          <InstitutionList allInstitutions={this.state.allInstitutions}/>
        </Col>
      </Row>
    );
  },
  
  _onChange: function() {
    this.setState(getInstitutionState());
  }
});

module.exports = Institution;