/*
 * Creating services thourgh factory.
 */
define(['./module'], function (services) {
	'use strict';
	
	services.factory('productServices', ['$q', function ($q) {
		var services = {};
		
		/*
		 * Add order quantity to product object
		 */
		services.addToCart = function (product, qty) {

			// add quantity attribute to order
			product.quantity = qty;

			// create defer object
			var deffered = $q.defer();
			deffered.resolve(product);
			
			// return a promise
			return deffered.promise;
		};

		/*
		 * Check duplicate order. Return true if duplicated
		 */
		services.isDuplicateOrder = function (newOrder, history) {

			// return if no order in the order list
			if (history.length === 0) return false;

			var newOrderId = newOrder.id,
				i = 0, 
				len = history.length;
			
			// return true if id matches
			for (i; i < len; i += 1) {
				if (newOrderId === history[i].id) {
					return true
				}
			}

			return false;
		};

		/*
		 * Remove order from order list.
		 */
		services.removeOrder = function (orders, index) {
			
			// remove item in orders array
			orders.splice(index, 1);

			var deffered = $q.defer();
			deffered.resolve(orders);

			return deffered.promise;
		};

		return services;
	}]);
});