var React = require('react');

var Router = require('react-router')
  , { RouteHandler, Route, Link } = Router;

var Bootstrap = require('react-bootstrap')
  , { Nav, Navbar, NavItem, DropdownButton, MenuItem } = Bootstrap;

var ReactRouterBootstrap = require('react-router-bootstrap')
  , { NavItemLink, ButtonLink } = ReactRouterBootstrap;

var Header = React.createClass({
  render: function() {
    return (
      <Navbar
        fixedTop={true}
        fluid={false}>
        <Nav>

          <NavItemLink to="search">Inicio</NavItemLink>
          <NavItemLink to="agreement">Convenios</NavItemLink>
          <NavItemLink to="settings">Configuraciones</NavItemLink>

          <DropdownButton eventKey={3} title="Dropdown">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3">Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
          </DropdownButton>

        </Nav>
      </Navbar>
    );
  }
});

module.exports = Header;