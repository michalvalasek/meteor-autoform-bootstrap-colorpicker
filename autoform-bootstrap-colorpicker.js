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

Template.afBootstrapColorpicker.onRendered(function afBootstrapColorpickerOnRendered() {
  var $input = this.$('.input-group');
  // initiate the colorpicker
  this.colorpicker = $input.colorpicker().data('colorpicker');
});

Template.afBootstrapColorpicker.onDestroyed(function afBootstrapColorpickerOnDestroyed() {
  // Reference to the picker instance is lost when removed from dom.
  // Destroying the instance directly.
  this.colorpicker.destroy();
});
