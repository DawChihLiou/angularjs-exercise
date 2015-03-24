define(['angular', 'angularMocks'], function (ng) {
	'use strict';

	describe('products controller', function () {

		var ctrlr, 
			prodService,
			rootScope, 
			scope, 
			location;

		beforeEach(ng.mock.module('app'));

		beforeEach(ng.mock.inject(function ($rootScope, $controller, $location, productServices) {
			
			rootScope = $rootScope;
			scope = $rootScope.$new();
			location = $location;
			prodService = productServices;
			
			location.path('/');

			ctrlr = $controller('productsController', {
				'$scope': scope
			});

			spyOn(scope, 'addToCart').and.callThrough();
			spyOn(scope, '$emit');
			spyOn(prodService, 'isDuplicateOrder').and.callThrough();
			spyOn(prodService, 'addToCart').and.callThrough();

		}));

		it('should show it is initialized with default path \'/\'', function () {
			
			expect(location.path()).toBe('/');
			expect(scope.showSearchResult).toBeFalsy();
		});

		it('should show products are defined', function () {
			
			expect(scope.products).toBeDefined();

		});

		it('should show there is at least 1 product', function () {
			
			expect(scope.products.length).toBeGreaterThan(1);

		});

		// test data
		var testProduct = {
				id: 123, 
				name: 'test123',
				price: 23.99,
				category: 'animal',
				description: 'description description description.'
			};

		it('should call isDuplicateOrder and addToCart when new order does not match hitory', function () {
			
			rootScope.orders = [];
			scope.addToCart(testProduct);
			scope.$digest();

			expect(scope.addToCart).toHaveBeenCalled();
			expect(prodService.isDuplicateOrder).toHaveBeenCalled();
			expect(prodService.addToCart).toHaveBeenCalled();
			expect(scope.$emit).toHaveBeenCalled();

		});

		it('should call isDuplicateOrder but not addToCart when new order matches hitory', function () {

			rootScope.orders = [testProduct];
			scope.addToCart(testProduct);
			scope.$digest();

			expect(scope.addToCart).toHaveBeenCalled();
			expect(prodService.isDuplicateOrder).toHaveBeenCalled();
			expect(prodService.addToCart).not.toHaveBeenCalled();
			expect(scope.$emit).not.toHaveBeenCalled();

		});
	});
});
