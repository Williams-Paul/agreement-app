var React = require('react')
  , Router = require('react-router')
  , { Route, DefaultRoute } = Router;

var AgreementComposer = require('./AgreementComposer.jsx')
  , AgreementCreateForm = require('./AgreementCreateForm.jsx')
  , AgreementList = require('./AgreementList.jsx');

var AgreementRoutes = (
  <Route
    name="agreement"
    handler={AgreementComposer}>
    <Route name="list" handler={AgreementList}/>
    <Route name="create" handler={AgreementCreateForm}/>
    <DefaultRoute handler={AgreementList}/>
  </Route>
);

module.exports = AgreementRoutes;
