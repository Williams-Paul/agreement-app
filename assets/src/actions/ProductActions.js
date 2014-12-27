/**
 * ProductActions
 */ 

var AppDispatcher = require('../dispatcher/AppDispatcher');
var ProductConstants = require('../constants/ProductConstants');

var ProductActions = {

  /**
   * @param  {string} text
   */
  create: function(params) {
    AppDispatcher.handleViewAction({
      actionType: ProductConstants.PRODUCT_CREATE,
      params: params
    });
  }
};

module.exports = ProductActions;
