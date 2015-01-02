var React = require('react')
  , Bootstrap = require('react-bootstrap')
  , Grid = React.createFactory(Bootstrap.Grid)
  , Row = React.createFactory(Bootstrap.Row)
  , Col = React.createFactory(Bootstrap.Col)
  , Nav = React.createFactory(Bootstrap.Nav)
  , PageHeader = React.createFactory(Bootstrap.PageHeader);

var Router = require('react-router')
  , RouteHandler = React.createFactory(Router.RouteHandler);

var ReactRouterBootstrap = require('react-router-bootstrap')
  , NavItemLink = React.createFactory(ReactRouterBootstrap.NavItemLink)
  , ButtonLink = React.createFactory(ReactRouterBootstrap.ButtonLink);

var SettingsNav = React.createClass({
  render: function() {
    return (
      <Row>
        <Col lg={3}>
          <Nav bsStyle="pills">
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