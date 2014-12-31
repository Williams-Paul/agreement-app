/**
* Agreement.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    title: {
      type: 'string'
    },
    objetives: {
      type: 'string'
    },
    purpose: {
      type: 'model'
    },
    locatization: {
      type: 'model'
    },
    institution: {
      type: 'model'
    },
    suscription: {
      model: 'suscription'
    }
  }
};

