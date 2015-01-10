var React = require('react')
  , Bootstrap = require('react-bootstrap')
  , { Grid, Row, Col, Nav, PageHeader } = Bootstrap;
  
var Router = require('react-router')
  , { RouteHandler } = Router;

var ReactRouterBootstrap = require('react-router-bootstrap')
  , { NavItemLink, ButtonLink } = ReactRouterBootstrap;

var SettingsNav = React.createClass({
  render: function() {
    return (
      <Row>
        <Col lg={3}>
          <Nav bsStyle="pills" stacked>
            <NavItemLink to="institution">Instituciones</NavItemLink>
            <NavItemLink to="product" >Productos</NavItemLink>
          </Nav>
        </Col>
        <Col lg={9}>
          <RouteHandler/>
        </Col>
      </Row>
    );
  }
});

module.exports = SettingsNav;
