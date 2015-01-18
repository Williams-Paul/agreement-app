/*
 * AgreementService
 */

var Promise = require('bluebird');
var superagent = require('superagent');
var Fluxy = require('fluxy');
var _url = '/agreement';
var _urlId = '/agreement/';
/*
 * monkey patch superagent to make it promise-able
 */
superagent.Request.prototype.promise = function () {
  var token = Promise.defer();
  this.end(function (err, res) {
    if (err) { return token.reject(err); }
    if (res.status !== 200) {
      if (res.body && res.body.error) {
        token.reject(res.body);
      }
      else {
        token.reject(res.error);
      }
    }
    else {
      token.resolve(res.body);
    }
  });
  return token.promise;
};

var AgreementService = {
  one: function (id) {
    return superagent
      .get(_urlId + id)
      .accept('json')
      .type('json')
      .promise();
  },

  list: function () {
    return superagent
      .get(_url)
      .accept('json')
      .type('json')
      .promise();
  },

  create: function(agreement) {
    return superagent
      .post(_url)
      .accept('json')
      .type('json')
      .send(agreement)
      .promise();
  },

  update: function (id, agreement) {
    return superagent
      .post(_urlId + id)
      .accept('json')
      .type('json')
      .send(agreement)
      .promise();
  },

  destroy: function (id) {
    return superagent
      .del(_urlId + id)
      .accept('json')
      .type('json')
      .promise();
  }
};

module.exports = AgreementService;
