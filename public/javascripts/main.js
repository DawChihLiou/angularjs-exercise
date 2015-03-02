'use strict';

require.config({
	baseUrl: './javascripts',

    paths: {
      'angular': 'lib/angular',
      'angular-route': 'lib/angular-route',
      'domReady': 'lib/domReady'
    },

    shim: {
    	'angular': {
    		exports: 'angular'
    	},
        'angular-route': {
            deps: ['angular']
        }
    },

    deps: ['./bootstrap']
});
