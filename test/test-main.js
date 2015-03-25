// need bootstrap.js to kickstart app
var allTestFiles = ['./bootstrap'];
var TEST_REGEXP = /(spec|test)\.js$/i;

// var pathToModule = function(path) {
//   return path.replace(/^\/base\//, '').replace(/\.js$/, '');
// };

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.

    // allTestFiles.push(pathToModule(file));
    allTestFiles.push(file);
  }
});

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base/public/javascripts',

  paths: {
    'angular': 'lib/angular',
    'angular-route': 'lib/angular-route',
    'angularMocks': 'lib/angular-mocks',
    'domReady': 'lib/domReady'
  },

  shim: {
    'angular': {
      exports: 'angular'
    },
    'angular-route': {
        deps: ['angular']
    },
    'angularMocks': {
      deps: ['angular'],
      exports: 'angularMocks'
    }
  },

  // dynamically load all test files
  deps: allTestFiles, 

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
