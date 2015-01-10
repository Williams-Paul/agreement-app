var React = require('react')
  , Router = require('react-router')
  , { Route, DefaultRoute } = Router;
  
var SettingsNav = require('./SettingsNav.jsx')
  , Product = require('../product/Product.jsx')
  , Institution = require('../institution/Institution.jsx');

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