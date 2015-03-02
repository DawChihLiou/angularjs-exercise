/*
 * Creating a attribute directive called subtotal which calculate
 * the total price of orders in cart.
 */
define(['./module'], function (directives) {
	'use strict';

	directives.directive('subtotal', [function () {

		var directive = {
			// restrict the directive to attribute type
			restrict: 'A',

			// define directive behavior
			link: function (scope, ele, attr) {
				
				scope.subtotal = 0;

				var	total = 0,
				    i = 0, 
					len = scope.orders? scope.orders.length : 0;
				
				// sum the total price
				for (i; i < len; i += 1) {
					total += scope.orders[i].price * scope.orders[i].quantity;
				}

				scope.subtotal = total.toFixed(2);
			}
		};

		return directive;
	}]);
});