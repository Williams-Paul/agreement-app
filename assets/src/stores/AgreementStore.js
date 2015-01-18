var AgreementConstants = require('../constants/AgreementConstants')
  , Fluxy = require('fluxy')
  , $ = Fluxy.$;

var AgreementStore = Fluxy.createStore({
  name: 'AgreementStore',

  getInitialState: function() {
    return {
      agreements: {}
    }
  },

  actions: [
    [AgreementConstants.AGREEMENT_CREATE_COMPLETED, function(agreement) {
      this.set([
        'agreements',
        agreement.id.toString()
      ], $.js_to_clj(agreement));
    }],
    [AgreementConstants.AGREEMENT_LIST_COMPLETED, function(agreements) {
      this.set(['agreements', agreements]);
    }]
  ]
});

module.exports = AgreementStore;
