var Fluxy = require('fluxy')
  , AgreementConstants = require('../constants/AgreementConstants')
  , AgreementService = require('../services/AgreementService');

var AgreementActions = Fluxy.createActions({

  serviceActions: {
    list: [ AgreementConstants.AGREEMENT_LIST, function() {
      return AgreementService.list(); // return promise
    }],
    create: [ AgreementConstants.AGREEMENT_CREATE, function(agreement) {
      return AgreementService.create(agreement); // return promise
    }],
    update: [ AgreementConstants.AGREEMENT_UPDATE, function(agreement) {
      return AgreementService.create(agreement); // return promise
    }],
    destroy: [ AgreementConstants.AGREEMENT_DESTROY, function(agreement) {
      return AgreementService.create(agreement); // return promise
    }]
  }

});

module.exports = AgreementActions;
