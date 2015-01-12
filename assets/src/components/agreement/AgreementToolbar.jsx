var React = require('react');
var ReactRouterBootstrap = require('react-router-bootstrap')
  , { NavItemLink, ButtonLink } = ReactRouterBootstrap;

var AgreementToolbar = React.createClass({
  render: function() {
    return (
      <div>
        <ButtonLink to="create">Nuevo</ButtonLink>
        <ButtonLink to="list">Lista</ButtonLink>
      </div>
    );
  }
});

module.exports = AgreementToolbar;
