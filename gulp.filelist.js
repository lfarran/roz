var generalAppFiles = [
  "./app/**/*.js",
  "!./app/app.js",
  "!./app/**/{,*/}*.test.js",
  "!./app/**/{,*/}*.mock.js",
  "!./app/**/{,*/}*.conf.js"
];

module.exports = {
  app_files: function () {
    'use strict';
    // The individual app builds (i.e. dashboard, conferencing, etc.) insert
    // the proper ./App.appName.js (i.e. App.conferencing) file at index 0 of the genearalAppFiles array.
    return generalAppFiles;
  },

  css_lib_files: function () {
    'use strict';
    return [
      "./bower_components/fontawesome/css/font-awesome.css"
    ];
  },

  js_lib_src: function () {
    'use strict';
    return [
      "bower_components/angular/angular.min.js",
      'bower_components/jquery.easing/js/jquery.easing.min.js',
      "bower_components/jqBootstrapValidation/dist/jqBootstrapValidation-1.3.7.js",
      "bower_components/classie/classie.js",
      "bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js"
    ];
  },

  sass_src: function () {
    'use strict';
    return [
      //'!app/**/*.theme.scss',
      './app/**/*.scss',
      'bower_components/bootstrap-sass/assets/stylesheets/**/*.scss'
    ];
  },

  image_src: function() {
    'use strict';
    return [
      './app/img/**/{,*/}*'
    ];
  },

  template_src: function() {
    return [
      './app/**/*.html'
    ];
  }

};