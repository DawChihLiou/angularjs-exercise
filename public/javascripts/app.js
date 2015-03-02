define([
    'angular',
    'angular-route',
    './controllers/loader',
    './directives/loader',
    // './filters/loader',
    './services/loader'
], function (angular) {
    'use strict';

    var app = angular.module('app', [
        'ngRoute',
        'app.controllers',
        'app.directives',
        // 'app.filters',
        'app.services',
    ]);

    return app;
});