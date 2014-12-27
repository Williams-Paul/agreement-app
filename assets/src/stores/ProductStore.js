/**
 * Product Store
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var ProductConstants = require('../constants/ProductConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _todos = {};

/**
 * Create a TODO item.
 * @param  {string} text The content of the TODO
 */
function create(params) {
  
  var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  _todos[id] = {
    id: id,
    complete: false,
    text: text
  };
}

var ProductStore = assign({}, EventEmitter.prototype, {
  
  /**
   * Get the entire collection of TODOs.
   * @return {object}
   */
  getAll: function() {
    return _todos;
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
  
  switch(action.actionType) {
    case ProductConstants.PRODUCT_CREATE:
      params = action.params;
      if (params) {
        create(params);
      }
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