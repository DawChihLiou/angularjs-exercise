define(['angular', 'angularMocks'], function (ng) {
	'use strict';

	describe('shopping cart controller', function () {

		var ctrlr,
			prodService,
			rootScope,
			scope,
			rootScope;

		beforeEach(ng.mock.module('app'));

		beforeEach(ng.mock.inject(function ($rootScope, $controller, productServices) {

			prodService = productServices;

			rootScope = $rootScope;
			scope = $rootScope.$new();
			ctrlr = $controller('shoppingCartController', {
				'$scope': scope
			});	

			//test data
			rootScope.orders = [
				{
					id: 1, 
					name: 'test1',
					price: 3.99,
					quantity: 3,
					category: 'animal',
					description: 'description.'
				}, {
					id: 12, 
					name: 'test12',
					price: 232.99,
					quantity: 5,
					category: 'sport',
					description: 'description description.'
				}, {
					id: 43, 
					name: 'test43',
					price: 4.49,
					quantity: 1,
					category: 'home',
					description: 'description description description.'
				}
			];

			spyOn(scope, 'removeOrder').and.callThrough();
			spyOn(prodService, 'removeOrder').and.callThrough();

		}));

		it('should remove the second item in order list', function () {

			expect(rootScope.orders.length).toEqual(3);
			expect(rootScope.orders[1].id).toEqual(12);

			scope.removeOrder(1);

			expect(scope.removeOrder).toHaveBeenCalled();
			expect(prodService.removeOrder).toHaveBeenCalled();
			expect(rootScope.orders.length).toEqual(2);
			expect(rootScope.orders[1].id).toEqual(43);
		});

		it('should update subtotal when removing item from order list', function () {
			
			var i = 0, len = rootScope.orders.length, oldSubtotal = 0;

			for (i; i < len; i += 1) {
				oldSubtotal += rootScope.orders[i].price * rootScope.orders[i].quantity;
			}

			scope.removeOrder(1);
			scope.$digest();

			expect(scope.subtotal).toBeDefined();
			expect(scope.subtotal).not.toEqual(oldSubtotal.toFixed(2));
			expect(oldSubtotal.toFixed(2) - scope.subtotal).toEqual(232.99 * 5);
		});

		
	});
});