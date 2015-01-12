var React = require('react')
  , Bootstrap = require('react-bootstrap')
  , { Row, Col, PageHeader, Button } = Bootstrap;

var AgreementItem = require('./AgreementItem.jsx')
  , AgreementToolbar = require("./AgreementToolbar.jsx");

var ReactRouterBootstrap = require('react-router-bootstrap')
  , { NavItemLink, ButtonLink } = ReactRouterBootstrap;

var AgreementList = React.createClass({
  render: function () {
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
  } 
});

module.exports = AgreementList;
