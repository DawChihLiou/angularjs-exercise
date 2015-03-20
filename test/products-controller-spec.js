define(['angular', 'angularMocks'], function (ng) {
	'use strict';

	describe('productsController', function () {

		var indexCtrlr, ctrlr, 
			rootScope, scope, location;

		beforeEach(ng.mock.module('app'));

		beforeEach(ng.mock.inject(function ($rootScope, $controller, $location) {
			rootScope = $rootScope;
			scope = $rootScope.$new();
			location = $location;
			
			location.path('/');

			ctrlr = $controller('productsController', {
				'$scope': scope
			});



		}));

		it('should show it is initialized with default path \'/\'', function () {
			expect(location.path()).toBe('/');
			expect(scope.showSearchResult).toBeFalsy();
		});

		it('should show products are defined', function () {
			expect(scope.products).toBeDefined();
		});

		it('should show there are more than 1 product', function () {
			expect(scope.products.length).toBeGreaterThan(1);
		});

		it('should emit event when firing addToCart()', function () {
			var testProduct = {
				id: 123, 
				name: 'test123',
				price: 23.99,
				category: 'animal',
				description: 'description description description.'
			};

			spyOn(scope, 'addToCart');
			spyOn(scope, '$emit');

			rootScope.orders = [];
			scope.addToCart(testProduct);

			expect(scope.addToCart).toHaveBeenCalled();
			expect(scope.$emit).toHaveBeenCalled();
		});

	});
});
