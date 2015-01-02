var React = require('react')
  , Bootstrap = require('react-bootstrap')
  , Grid = React.createFactory(Bootstrap.Grid)
  , Row = React.createFactory(Bootstrap.Row)
  , Col = React.createFactory(Bootstrap.Col)
  , PageHeader = React.createFactory(Bootstrap.PageHeader);

var Router = require('react-router')
  , RouteHandler = React.createFactory(Router.RouteHandler)
  , Route = React.createFactory(Router.Route);

var MainHeader = React.createFactory(require('./app/Header.react.jsx'));

var SettingsRoutes = require('./settings/SettingsRoutes.react.jsx');

var App = React.createClass({
  
  render: function() {
   return (
     <Grid>
      <MainHeader/>
      <Row>
        <Col lg={12} xs={12}>
          <RouteHandler />
        </Col>
      </Row>
     </Grid>
   ); 
  }
});

var routes = (
  <Route name="app" handler={App} path="/">
    {SettingsRoutes}
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});