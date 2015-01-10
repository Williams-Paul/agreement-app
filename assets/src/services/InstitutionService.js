/**
 * InsitutionService
 */

var request = require('superagent');
require('q-superagent')(request);

var _url = '/institution/';

InsitutionService = {
  create: function(data, success, failure) {
    request.post(_url).send(data).q(function(res) {
      var data = res.body;
      success(data);
    }).fail(function(err) {
      failure(err);
    });
  },

  update: function(id, data, success, failure) {
    request.post(_url + id)
      .send(data).q(function(res) {
      var data = res.body;
      success(data);
    }).fail(function(err) {
      failure(err);
    });
  },

  destroy: function(id, success, failure) {
    request.del(_url + id).q(function(res) {
      if (res.ok) {
        success(id);
      }
    }).fail(function(error) {
      failure(error);
    });
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

module.exports = InsitutionService;
