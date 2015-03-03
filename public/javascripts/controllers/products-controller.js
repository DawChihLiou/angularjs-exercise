/*
 * Creating controller for proucts view.
 */
define(['./module'], function (controllers) {
	'use strict';

	controllers.controller('productsController', [
		'$scope', 
		'$rootScope',
		'$location',
		'$routeParams',
		'productFactory', 
		'productServices', 
		function ($scope, $rootScope, $location, $routeParams, productFactory, productServices) {

			console.log('products controller initialized.');

			var quickShopQty = 1

			if ($location.path() === '/products') {
				$scope.showSearchReault = false;
				$scope.products = productFactory.getAllProducts;
			} else {
				$scope.showSearchReault = true;
				$scope.query = $routeParams.query;
				$scope.products = productFactory.getProductsByKeyword($routeParams.query);
			}
			
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
	}]);
});