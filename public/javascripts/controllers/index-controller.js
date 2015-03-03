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
		'productFactory',
		function ($scope, $rootScope, $location, productFactory) {

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

			/* 
			 * search for particular products with keywords
			 */
			$scope.searchProducts = function (keyword) {
				var result = productFactory.getProductsByKeyword(keyword);

				// route to 'cart' view
				$location.path('/search/' + keyword);
				$scope.searchValue = '';
			};

		}]);
});
