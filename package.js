Package.describe({
  name: 'michalvalasek:autoform-bootstrap-colorpicker',
  version: '0.1.0',
  summary: 'Custom bootstrap colorpicker input type for Autoform',
  git: 'https://github.com/michalvalasek/meteor-autoform-bootstrap-colorpicker.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('templating@1.0.0');
  api.use('aldeed:autoform@5.0.0', 'client');
  api.addFiles([
    'lib/bootstrap-colorpicker/dist/js/bootstrap-colorpicker.js',
    'lib/bootstrap-colorpicker/dist/css/bootstrap-colorpicker.css',
    'lib/bootstrap-colorpicker/dist/img/bootstrap-colorpicker/alpha.png',
    'lib/bootstrap-colorpicker/dist/img/bootstrap-colorpicker/hue.png',
    'lib/bootstrap-colorpicker/dist/img/bootstrap-colorpicker/saturation.png',
    'autoform-bootstrap-colorpicker.html',
    'autoform-bootstrap-colorpicker.js'
  ], 'client');
});
