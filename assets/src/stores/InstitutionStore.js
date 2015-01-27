/**
 * Product Store
 */

var InstitutionConstants = require('../constants/InstitutionConstants')
  , Fluxy = require('fluxy')
  , $ = Fluxy.$;

var ProductStore = Fluxy.createStore({
  name: 'ProductStore',

  getInitialState: function() {
    return {
      institutions: {}
    }
  },

  actions: [
    [InstitutionConstants.INSTITUTION_LIST_COMPLETED, function (institutions) {

      var obj = {};

      institutions.map(function (institution) {
        obj[institution.id] = institution
      });

      this. setFromJS('institutions', obj);
    }],

    [InstitutionConstants.INSTITUTION_CREATE_COMPLETED, function(institution) {
      this.set([
        'institutions',
        institution.id
      ], $.js_to_clj(institution));
    }],
    [InstitutionConstants.INSTITUTION_UPDATE_COMPLETED, function (id, institution) {
      // this.set(['institutions', institutions])
    }],
    [InstitutionConstants.INSTITUTION_DESTROY_COMPLETED, function (id) {
      // this.set(['institutions', institutions])
    }]
  ]
});

module.exports = ProductStore;
