/*
 * Creating default parent controller with the general functionalities
 * through out the entire app.
 */
define(['./module'], function (controllers) {
	'use strict';

	controllers.controller('indexController', [
		'$scope', 
		'$rootScope',
		'$location',
		'productServices', 
		function ($scope, $rootScope, $location, productServices) {

			console.log('index controller initialized.');

			// collection of orders
			$rootScope.orders = [];

			// listen to event from child productController
			$scope.$on('addOrderEvent', function (event, data) {

				console.log('listen to addOrder Event.')
				
				$rootScope.orders.push(data);

				console.log($rootScope.orders);	
				
			});

			/*
			 * Communicate with product detail controller through 
			 * root scope 
			 */
			$scope.viewCart = function () {

				// route to 'cart' view
				$location.path('/cart');
			}

		}]);
});
