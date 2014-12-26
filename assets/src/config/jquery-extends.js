var jQuery = require('jquery'),
  FormSerializer = require("form-serializer"),
  Helper = require("./helper");

var helper = new Helper(jQuery || {});

jQuery.fn.serializeObject = function() {

  var form = jQuery(this);

  if (form.length > 1) {
    return new Error("jquery-serialize-object can only serialize one form at a time");
  }

  return new FormSerializer(helper).
    addPairs(form.serializeArray()).
    serialize();
};

module.exports = jQuery;
