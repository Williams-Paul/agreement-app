var React = require('react')
  , Router = require('react-router')
  , Route = React.createFactory(Router.Route)
  , DefaultRoute = React.createFactory(Router.DefaultRoute)
  
  , SettingsNav = require('./SettingsNav.react.jsx')
  , Product = require('../product/Product.react.jsx')
  , Institution = require('../institution/Institution.react.jsx');

var SettingsRoutes = (
  <Route
    name="settings"
    handler={SettingsNav}>
    <Route name="institution" handler={Institution}/>
    <Route name="product" handler={Product}/>
    <DefaultRoute handler={Product}/>
  </Route>
);

module.exports = SettingsRoutes;