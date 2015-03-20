define(['./app'], function (app) {
    'use strict';

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
        	templateUrl: 'partials/products.html',
        	controller: 'productsController'
        });

        $routeProvider.when('/product-detail/:id', {
        	templateUrl: 'partials/product-detail.html',
        	controller: 'productDetailController'
        });

        $routeProvider.when('/cart', {
            templateUrl: 'partials/shopping-cart.html',
            controller: 'shoppingCartController'
        });

        $routeProvider.when('/search/:query', {
            templateUrl: 'partials/products.html',
            controller: 'productsController'
        });

        $routeProvider.otherwise({
        	redirectTo: '/'
        });
    }]);

    return app;
});