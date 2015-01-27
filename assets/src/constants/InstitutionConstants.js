/**
 * ProductConstants
 */

var Fluxy = require('fluxy');

var InstitutionConstants = Fluxy.createConstants({
  serviceMessages: [
    'INSTITUTION_ONE',
    'INSTITUTION_LIST',
    'INSTITUTION_CREATE',
    'INSTITUTION_UPDATE',
    'INSTITUTION_DESTROY'
  ]
});

module.exports = InstitutionConstants;
