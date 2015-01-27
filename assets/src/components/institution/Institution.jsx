var React = require('react')
  , Bootstrap = require('react-bootstrap')
  , { Grid, Row, Col, PageHeader } = Bootstrap;

var InstitutionForm = require('./InstitutionForm.jsx')
  , InstitutionList = require('./InstitutionList.jsx');

var InstitutionStore = require('../../stores/InstitutionStore');
var InstitutionActions = require('../../actions/InstitutionActions');

/**
 * Retrive the current Institution
 */
function getInstitutionState() {
  return {
    allInstitutions: InstitutionStore.getAsJS('institutions')
  }
};

var Institution = React.createClass({

  getInitialState: function() {
    return getInstitutionState();
  },

  componentDidMount: function() {
    InstitutionActions.list();
    InstitutionStore.addWatch(this._onChange);
  },

  componentWillUnmount: function() {
    InstitutionStore.removeWatch(this._onChange);
  },

  shouldComponentUpdate: function (nextProps, nextState) {
    return !InstitutionStore.$equals(this.state.allInstitutions, nextState.allInstitutions);
  },

  render: function() {
    return (
      <Row>
        <Col lg={12} xs={12}>
          <PageHeader>Instituciones</PageHeader>
        </Col>
        <Col lg={6} xs={6}>
          <InstitutionForm
            placeholder="Nombre de institutción."
            onSave={this._onSave}
            id={'institution-form'}/>
        </Col>
        <Col lg={6} xs={6}>
          <InstitutionList allInstitutions={this.state.allInstitutions}/>
        </Col>
      </Row>
    );
  },

  _onChange: function() {
    this.setState(getInstitutionState());
  },

  _onSave: function(data) {
    if(data) {
      InstitutionActions.create(data);
    }
  }
});

module.exports = Institution;
