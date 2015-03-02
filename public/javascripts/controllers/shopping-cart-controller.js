/*
 * Creating controller for cart view
 */
define(['./module'], function (controllers) {
	'use strict';

	controllers.controller('shoppingCartController', [
		'$scope', 
		'$rootScope', 
		'productServices',
		function ($scope, $rootScope, productServices) {
			
			console.log('shopping cart controller initialized.');

			// remove order from order list
			$scope.removeOrder = function (index) {
				productServices.removeOrder($rootScope.orders, index)
					.then(function (data) {

						var sum = 0,
							orders = $rootScope.orders,
							i = 0,
							len = orders.length;

						// update subtotal
						for (i; i < len; i += 1) {
							sum += orders[i].price * orders[i].quantity;
						}

						$scope.subtotal = sum.toFixed(2);
					}, function (err) {

						console.log(err);

						alert('Sorry, item cannot be removed at this time.');
				});
			};
	}]);
});