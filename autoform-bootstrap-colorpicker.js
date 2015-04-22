/* global AutoForm, $ */

AutoForm.addInputType("bootstrap-colorpicker", {
  template: "afBootstrapColorpicker"
});

Template.afBootstrapColorpicker.helpers({
  atts: function addFormControlAtts() {
    var atts = _.clone(this.atts);
    atts = AutoForm.Utility.addClass(atts, "form-control");
    return atts;
  },

  value: function() {
    var data = Template.currentData();
    return data.value;
  }
});

Template.afBootstrapColorpicker.rendered = function () {
  var $input = this.$('.input-group');
  // initiate the colorpicker
  $input.colorpicker();
};

Template.afBootstrapColorpicker.destroyed = function () {
  var $input = this.$('.input-group');
  $input.colorpicker('destroy');
};
