define(['angular', 'angularMocks'], function (ng) {
	'use strict';

	describe('subtotal directive', function () {

		var ele,
			scope,
			compile;

		beforeEach(ng.mock.module('app'));

		beforeEach(ng.mock.inject(function ($rootScope, $compile) {

			scope = $rootScope.$new();
			compile = $compile;
			
			scope.orders = [
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
			
			ele = compile('<div subtotal>{{ subtotal }}</div>')(scope);
			scope.$digest();
			angular.element(document.body).append(ele);
			
		}));

		it('should calculate subtotal', function () {
			
			expect(scope.subtotal).toBeDefined();
			expect(scope.subtotal).not.toBeNull();
			expect(scope.subtotal).toBe((3.99 * 3 + 232.99 * 5 + 4.49).toFixed(2));
			expect(ele.html()).toContain(scope.subtotal);
			
		});
	});
});