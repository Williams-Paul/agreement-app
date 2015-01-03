/**
 * InstitutionActions
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var InstitutionConstants = require('../constants/InstitutionConstants');
var InstitutionService = require('../services/InstitutionService');

var InstitutionActions = {

  /**
   * @param  {string} text
   */
  create: function(params) {

    AppDispatcher.handleViewAction({
      actionType: InstitutionConstants.INSTITUTION_CREATE
    });

    InstitutionService.create(params, function(data) {
      AppDispatcher.handleViewAction({
        actionType: InstitutionConstants.INSTITUTION_CREATE_SUCCESS,
        data: data
      });
    }, function(error) {
      AppDispatcher.handleViewAction({
        actionType: InstitutionConstants.INSTITUTION_CREATE_FAILURE,
        error: error
      });
    });
  },

  destroy: function(key) {
    AppDispatcher.handleViewAction({
      actionType: InstitutionConstants.INSTITUTION_DELETE
    });

    InstitutionService.destroy(key, function(id) {
      AppDispatcher.handleViewAction({
        actionType: InstitutionConstants.INSTITUTION_DELETE_SUCCESS,
        id: id
      });
    }, function(error) {
      AppDispatcher.handleViewAction({
        actionType: InstitutionConstants.INSTITUTION_DELETE_FAILURE,
        error: error
      });
    });
  },

  load: function() {

    AppDispatcher.handleViewAction({
      actionType: InstitutionConstants.INSTITUTION_LOAD
    });

    InstitutionService.load(function(data) {
      AppDispatcher.handleViewAction({
        actionType: InstitutionConstants.INSTITUTION_LOAD_SUCCESS,
        data: data
      });
    }, function(error) {
      AppDispatcher.handleViewAction({
        actionType: InstitutionConstants.INSTITUTION_LOAD_FAIL,
        error: error
      });
    });

  }
};

module.exports = InstitutionActions;
