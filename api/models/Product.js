/**
* Product.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name: {
      type: 'string'
    },
    unit: {
      model: 'unit'
    },
    unitPrice: {
      type: 'float'
    },
    amount: {
      type: 'float'
    },
    total: {
      type: 'float'
    }
  }
};

