/**
 * Product Store
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var ProductConstants = require('../constants/ProductConstants');

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var Immutable = require('immutable');

var CHANGE_EVENT = 'change';

var _products = {};
var loading = false;

/**
 * Create a TODO item.
 * @param  {string} text The content of the TODO
 */
function create(params) {

  var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  _products[id] = {
    id: id,
    complete: false,
    text: text
  };
}

var ProductStore = assign({}, EventEmitter.prototype, {

  /**
   * Get the entire collection of PRODUCTSs.
   * @return {object}
   */
  getProducts: function() {
    return _products;
  },

  getLoading: function() {
    return loading
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// Register to handle all updates
AppDispatcher.register(function(payload) {
  var action = payload.action;
  var params;

  switch (action.actionType) {
    // Create events.
    case ProductConstants.PRODUCT_CREATE:
      loading = true;
      break;

    case ProductConstants.PRODUCT_CREATE_SUCCESS:
      data = action.data;
      loading = false;
      _products[data.id] = data;
      break;

    case ProductConstants.PRODUCT_CREATE_FAIL:
      error = action.error;
      loading = false;
      break;

      // Load Events.
    case ProductConstants.PRODUCT_LOAD:
      loading = true;
      break;

    case ProductConstants.PRODUCT_LOAD_SUCCESS:
      var result = {};
      loading = false;
      data = action.data;

      data.map(function(item) {
        result[item.id] = item;
      });

      _products = result;
      break;

    case ProductConstants.PRODUCT_CREATE_FAIL:
      error = action.error;
      loading = false;
      break;

    default:
      return true;
  }

  // This often goes in each case that should trigger a UI change. This store
  // needs to trigger a UI change after every view action, so we can make the
  // code less repetitive by putting it here.  We need the default case,
  // however, to make sure this only gets called after one of the cases above.
  ProductStore.emitChange();

  return true;
});

module.exports = ProductStore;
