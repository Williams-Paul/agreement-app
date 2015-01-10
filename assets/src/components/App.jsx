var React = require('react')
  , Bootstrap = require('react-bootstrap')
  , { Grid, Row, Col, PageHeader } = Bootstrap;

var Router = require('react-router')
  , { RouteHandler , Route } = Router;

var MainHeader = require('./app/Header.jsx');
var SettingsRoutes = require('./settings/SettingsRoutes.jsx');
var AgreementList = require('./agreement/AgreementList.jsx');
var Search = require('./search/Search.jsx');

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
   <Route name="agreement" handler={AgreementList}/>
   <Route name="search" handler={Search}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});