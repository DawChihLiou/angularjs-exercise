/*
 * Creating controller for proucts view.
 */
define(['./module'], function (controllers) {
	'use strict';

	controllers.controller('productsController', [
		'$scope', 
		'$rootScope',
		'productFactory', 
		'productServices', 
		function ($scope, $rootScope, productFactory, productServices) {

			console.log('products controller initialized.');

			var quickShopQty = 1

			$scope.products = productFactory.products;
			
			// add placed order to cart
			$scope.addToCart = function (product) {

				// not allowing duplicated orders
				if (productServices.isDuplicateOrder(product, $rootScope.orders)) {
					alert('You already have ' + product.name + ' in your cart.');
				} else {
					productServices.addToCart(product, quickShopQty)
						.then(function (data) {
							// pass date by emitting event to parent controller 
							$scope.$emit('addOrderEvent', data);

						}, function (err) {
							//error
							console.log('add order to cart failed -> ' + err);
					});
				}
			};

			// search for particular products with keywords
			$scope.searchProduct = function (keyword) {
				productServices.search(keyword, $scope.products)
					.then(function (data) {
						// update product list	
						$scope.products = data;

					}, function (err) {
						console.log('Search result failed. ' + err);
				});

			};
	}]);
});