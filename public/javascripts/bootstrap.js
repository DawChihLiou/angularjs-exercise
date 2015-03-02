define([
    'require',
    'angular',
    'app',
    'routes'
], function (require, ng) {
    'use strict';

    require(['domReady!'], function (document) {
    	// bootstrap angular application
     	ng.bootstrap(document, ['app']);
    });
});