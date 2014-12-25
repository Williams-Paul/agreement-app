/** @jsx React.DOM */

var React = require('react');
var App = require('./components/App.react');

React.render(
  React.createElement(App), document.getElementById('app')
);