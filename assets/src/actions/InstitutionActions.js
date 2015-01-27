/**
 * Institution Actions
 */

var Fluxy = require('fluxy')
  , InstitutionConstants = require('../constants/InstitutionConstants')
  , InstitutionService = require('../services/InstitutionService');

var InstitutionActions = Fluxy.createActions({
  serviceActions: {

    list: [InstitutionConstants.INSTITUTION_LIST, function() {
      return InstitutionService.list(); // return promise
    }],

    create: [InstitutionConstants.INSTITUTION_CREATE, function(institution) {
      return InstitutionService.create(institution);
    }],

    update: [InstitutionConstants.INSTITUTION_UPDATE, function(id, institution) {
      return InstitutionService.udpated(id, institution);
    }],

    destroy: [InstitutionConstants.INSTITUTION_DESTROY, function(id) {
      return InstitutionService.destroy(id);
    }]
  }
});

module.exports = InstitutionActions;
