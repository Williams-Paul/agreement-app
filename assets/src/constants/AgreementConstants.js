var Fluxy = require('fluxy');

var AgreementConstants = Fluxy.createConstants({
  serviceMessages: [
    'AGREEMENT_ONE',
    'AGREEMENT_LIST',
    'AGREEMENT_CREATE',
    'AGREEMENT_UPDATE',
    'AGREEMENT_DESTROY'
  ]
});

module.exports = AgreementConstants;
