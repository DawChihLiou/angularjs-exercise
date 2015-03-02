/*
 * Creating controller for product detail view.
 */
define(['./module'], function (controllers) {
	'use strict';
	
	controllers.controller('productDetailController', [
		'$scope', 
		'$rootScope',
		'$routeParams', 
		'productFactory',
		'productServices', 
		function ($scope, $rootScope, $routeParams, productFactory, productServices) {

			console.log('product detail controller initialized.');

			// get product id from route parameter
			var productId = $routeParams.id;

			// set default order quantity
			$scope.qty = 1;
			
			// retrieve target product from product factory
			$scope.product = productFactory.products[productId - 1];
			
			// add placed order to cart
			$scope.addToCart = function (product) {

				// not allowing duplicated orders
				if (productServices.isDuplicateOrder(product, $rootScope.orders)) {
					alert('You already have ' + product.name + ' in your cart.');
				} else {
					productServices.addToCart(product, $scope.qty)
						.then(function (data) {
							// emit event to parent $scope
							$scope.$emit('addOrderEvent', data);
						}, function (err) {
							console.log('add order to cart failed -> ' + err);
					});
				}
			}

		}]);
});