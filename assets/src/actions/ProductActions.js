/**
 * ProductActions
 */ 

var AppDispatcher = require('../dispatcher/AppDispatcher');
var ProductConstants = require('../constants/ProductConstants');
var ProductService = require('../services/ProductService');

var ProductActions = {

  /**
   * @param  {string} text
   */
  create: function(params) {
    
    AppDispatcher.handleViewAction({
      actionType: ProductConstants.PRODUCT_CREATE
    });
    
    ProductService.create(params, function(data) {
      AppDispatcher.handleViewAction({
        actionType: ProductConstants.PRODUCT_CREATE_SUCCESS,
        data: data
      });
    }, function(error) {
      AppDispatcher.handleViewAction({
        actionType: ProductConstants.PRODUCT_CREATE_FAILURE,
        error: error
      });
    });
  },
  load: function() {
    
    AppDispatcher.handleViewAction({
      actionType: ProductConstants.PRODUCT_LOAD
    });
    
    ProductService.load(function(data) {
      AppDispatcher.handleViewAction({
        actionType: ProductConstants.PRODUCT_LOAD_SUCCESS,
        data: data
      });
    }, function(error) {
      AppDispatcher.handleViewAction({
        actionType: ProductConstants.PRODUCT_LOAD_FAIL,
        error: error
      });
    });
    
  }
};

module.exports = ProductActions;
