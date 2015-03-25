define(['angular', 'angularMocks'], function (ng) {
	'use strict';

	describe('product service', function () {

		var service;

		beforeEach(ng.mock.module('app'));

		beforeEach(ng.mock.inject(function (productServices) {

			service = productServices;

			spyOn(service, 'addToCart').and.callThrough();
			spyOn(service, 'isDuplicateOrder').and.callThrough();
			spyOn(service, 'removeOrder').and.callThrough();

		}));

		var testData = {
			id: 123,
			name: 'test',
		};

		it('should fire addToCart function and add quantity property to product object', function () {

			var qty = 8;

			service.addToCart(testData, qty).then(
				function (data) {
					testData = data;	
				}, function (err) {
					console.log(err);
			});

			expect(testData).toBeDefined();
			expect(testData).not.toBeNull();
			expect(testData.quantity).toBe(8);

		});

		it('should return false from isDuplicateOrder()', function () {

			var orderHistory = [
				{
					id: 122,
					name: 'something' 
				}, {
					id: 124,
					name: 'something else'
				}
			];

			expect(service.isDuplicateOrder(testData, orderHistory)).toBeFalsy();
			expect(service.isDuplicateOrder(testData, [])).toBeFalsy();

		});

		it('should return true from isDuplicateOrder()', function () {
			
			var orderHistory = [
				{
					id: 123,
					name: 'something' 
				}, {
					id: 124,
					name: 'something else'
				}
			];

			expect(service.isDuplicateOrder(testData, orderHistory)).toBeTruthy();

		});

		it('should remove the first item in order list', function () {

			var index = 0,
				orders = [
					{
						id: 121,
						name: 'something' 
					}, {
						id: 122,
						name: 'something else'
					}, {
						id: 123,
						name: 'whatever' 
					}, {
						id: 124,
						name: 'yourpick'
					}
				];

			expect(orders.length).toBe(4);
			expect(orders[0].id).toBe(121);
			
			service.removeOrder(orders, index).then(
				function (data) {
					console.log(data);
					orders = data;
				}, function (err) {
					console.log(err);
			});

			expect(service.removeOrder).toHaveBeenCalled();
			expect(orders).not.toBeNull();
			expect(orders.length).toBe(3);
			expect(orders[0].id).toBe(122);
		});

	});
});