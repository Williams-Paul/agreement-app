/**
 * Product Store
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var InstitutionConstants = require('../constants/InstitutionConstants');

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var Immutable = require('immutable');

var CHANGE_EVENT = 'change';

var _institutions = {};
var loading = false;

/**
 * Create a TODO item.
 * @param  {string} text The content of the TODO
 */
function create(params) {
  
  var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  _institutions[id] = {
    id: id,
    complete: false,
    text: text
  };
}

var ProductStore = assign({}, EventEmitter.prototype, {
  
  /**
   * Get the entire collection of INSTITUTIONS.
   * @return {object}
   */
  getInstitutions: function() {
    return _institutions;
  },
  
  getLoading: function() {
    return loading;
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
    // Create events.
    case InstitutionConstants.INSTITUTION_CREATE:
      loading = true;
      break;
    
    case InstitutionConstants.INSTITUTION_CREATE_SUCCESS:      
      data = action.data;
      loading = false;
      _institutions[data.id] = data;
      break;
    
    case InstitutionConstants.INSTITUTION_CREATE_FAIL:
      error = action.error;
      loading = false;
      break;
    
    // Load Events.
    case InstitutionConstants.INSTITUTION_LOAD:
      loading = true;
      break;
    
    case InstitutionConstants.INSTITUTION_LOAD_SUCCESS:
      var result = {};
      loading = false;
      data = action.data;
            
      data.map(function(item) {
        result[item.id] = item;
      });
      
      _institutions = result;
      break;
    
    case InstitutionConstants.INSTITUTION_CREATE_FAIL:
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