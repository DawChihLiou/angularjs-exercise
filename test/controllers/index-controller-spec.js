define(['angular', 'angularMocks'], function (ng) {
	'use strict';

	describe('index controller', function () {

		var ctrlr,
			prodFactory,
			scope,
			rootScope,
			location;

		beforeEach(ng.mock.module('app'));

		beforeEach(ng.mock.inject(function ($rootScope, $controller, $location, productFactory) {
			
			rootScope = $rootScope;
			scope = $rootScope.$new();
			location = $location;
			prodFactory = productFactory;

			spyOn(scope, '$on').and.callThrough();

			ctrlr = $controller('indexController', {
				'$rootScope': rootScope,
				'$scope': scope
			});

			spyOn(scope, 'viewCart').and.callThrough();
			spyOn(scope, 'searchProducts').and.callThrough();
			spyOn(prodFactory, 'getProductsByKeyword').and.callThrough();

		}));

		it('should direct users to cart view', function () {
			
			scope.viewCart();
			expect(location.path()).toBe('/cart');

		});

		it('should search product with keyword "product3"', function () {

			scope.searchProducts('product3');
			expect(location.path()).toBe('/search/product3');

		});

		it('should catch addOrderEvent' , function () {
			
			var child_scope = scope.$new(),
				data = {
					id: 123, 
					name: 'test123',
					price: 23.99,
					category: 'animal',
					description: 'description description description.'
				};

			child_scope.$emit('addOrderEvent', data);

			expect(scope.$on).toHaveBeenCalled();
			expect(rootScope.orders.length).not.toEqual(0);

		});
	});	
});