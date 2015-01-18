var React = require('react')
  , Bootstrap = require('react-bootstrap')
  , { Row, Col, PageHeader, Button } = Bootstrap;

var AgreementItem = require('./AgreementItem.jsx')
  , AgreementToolbar = require("./AgreementToolbar.jsx");

var ReactRouterBootstrap = require('react-router-bootstrap')
  , { NavItemLink, ButtonLink } = ReactRouterBootstrap;

var AgreementStore = require('../../stores/AgreementStore');
var AgreementActions = require('../../actions/AgreementActions');

function getAgreementState () {
  return {
    allAgreements: AgreementStore.get('agreements')
  };
}

var AgreementList = React.createClass({

  getInitialState: function (){
    return getAgreementState();
  },

  componentDidMount: function() {
    AgreementActions.list();
    AgreementStore.addWatch(this._onChange);
  },

  componentWillUnmount: function() {
    AgreementStore.removeWatch(this._onChange);
  },

  shouldComponentUpdate: function (nextProps, nextState) {
    return !AgreementStore.$equals(this.state.allAgreements, nextState.allAgreements);
  },

  render: function() {
    return(
      <Row>
        <Col lg={12}>
          <PageHeader>
            Lista de Convenios
            <div className="pull-right">
              <AgreementToolbar/>
            </div>
          </PageHeader>
          <AgreementItem/>
        </Col>
      </Row>
      );
  },

  _onChange: function (keys, oldState, newState) {
    this.setState(getAgreementState());
  }

});

module.exports = AgreementList;
