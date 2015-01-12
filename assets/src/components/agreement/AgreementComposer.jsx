var React = require('react')
  , Bootstrap = require('react-bootstrap')
  , { Grid, Row, Col, Nav, PageHeader } = Bootstrap;

var Router = require('react-router')
  , { RouteHandler } = Router;

var ReactRouterBootstrap = require('react-router-bootstrap')
  , { NavItemLink, ButtonLink } = ReactRouterBootstrap;

var AgreementComposer = React.createClass({
  render: function() {
    return (
      <Row>
        <Col lg={12}>
          <RouteHandler/>
        </Col>
      </Row>
    );
  }
});

module.exports = AgreementComposer;
