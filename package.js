Package.describe({
  name: 'michalvalasek:autoform-bootstrap-colorpicker',
  version: '0.0.2',
  summary: 'Custom bootstrap colorpicker input type for Autoform',
  git: 'https://github.com/michalvalasek/meteor-autoform-bootstrap-colorpicker.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('aldeed:autoform@5.0.0');
  api.addFiles([
    'autoform-bootstrap-colorpicker.html',
    'autoform-bootstrap-colorpicker.js',
    'lib/bootstrap-colorpicker/js/bootstrap-colorpicker.js',
    'lib/bootstrap-colorpicker/css/bootstrap-colorpicker.css',
    'lib/bootstrap-colorpicker/img/bootstrap-colorpicker/alpha.png',
    'lib/bootstrap-colorpicker/img/bootstrap-colorpicker/hue.png',
    'lib/bootstrap-colorpicker/img/bootstrap-colorpicker/saturation.png'
  ], 'client');
});
