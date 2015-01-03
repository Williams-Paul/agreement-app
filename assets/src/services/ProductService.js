/**
 * ProductService
 */

var request = require('superagent');
require('q-superagent')(request);

var _url = '/product/';

ProductService = {
  create: function(data, success, failure) {
    request.post(_url).send(data).q(function(res) {
      var data = res.body;
      success(data);
    }).fail(function(err) {
      failure(err);
    });
  },

  update: function() {

  },

  completeAll: function() {

  },

  destroy: function() {

  },

  destroyCompleted: function() {

  },

  load: function(success, failure) {
    request.get(_url).q(function(res) {
      var data = res.body;
      success(data);
    }).fail(function(error) {
      failure(error);
    });
  }
}

module.exports = ProductService;
