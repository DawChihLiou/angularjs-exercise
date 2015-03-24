define(['angular', 'angularMocks'], function (ng) {
	'use strict';

	describe('product detail controller', function () {

		var ctrlr,
			prodFactory,
			prodService,
			rootScope,
			scope,
			rootScope;

		beforeEach(ng.mock.module('app'));

		beforeEach(ng.mock.inject(function ($rootScope, $controller, productFactory, productServices) {

			var productId = 9;

			prodFactory = productFactory;
			prodService = productServices;

			rootScope = $rootScope;
			scope = $rootScope.$new();
			ctrlr = $controller('productDetailController', {
				'$scope': scope,
				'$routeParams': {
					id: productId
				}
			});	

			spyOn(scope, 'addToCart').and.callThrough();
			spyOn(scope, '$emit');
			spyOn(prodService, 'isDuplicateOrder').and.callThrough();
			spyOn(prodService, 'addToCart').and.callThrough();
			spyOn(prodFactory, 'getProductsByKeyword').and.callThrough();

		}));

		it('should return product with id 9', function () {
			
			expect(prodFactory.getAllProducts).toBeDefined();
			expect(prodFactory.getAllProducts.length).toBeGreaterThan(0);
			expect(scope.product).toBeDefined();
			expect(scope.product.id).toEqual(9);

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