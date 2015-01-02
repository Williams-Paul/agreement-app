var React = require('react');

var Router = require('react-router')
  , RouteHandler = React.createFactory(Router.RouteHandler)
  , Route = React.createFactory(Router.Route)
  , Link = React.createFactory(Router.Link);

var ReactBootstrap = require('react-bootstrap')
  , Nav = React.createFactory(ReactBootstrap.Nav)
  , Navbar = React.createFactory(ReactBootstrap.Navbar)
  , NavItem = React.createFactory(ReactBootstrap.NavItem)
  , DropdownButton = React.createFactory(ReactBootstrap.DropdownButton)
  , MenuItem = React.createFactory(ReactBootstrap.MenuItem);

var ReactRouterBootstrap = require('react-router-bootstrap')
  , NavItemLink = React.createFactory(ReactRouterBootstrap.NavItemLink)
  , ButtonLink = React.createFactory(ReactRouterBootstrap.ButtonLink);

var Header = React.createClass({
  render: function() {
    return (
      <Navbar 
        fixedTop={true}
        fluid={false}>
        <Nav>
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