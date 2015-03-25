define(['angular', 'angularMocks'], function (ng) {
	'use strict';

	describe('product factory', function () {

		var prodFactory;

		beforeEach(ng.mock.module('app'));

		beforeEach(ng.mock.inject(function (productFactory) {

			prodFactory = productFactory;
			spyOn(prodFactory, 'getProductsByKeyword').and.callThrough();

		}));

		it('should return all products available', function () {

			var productArray = prodFactory.getAllProducts;

			expect(productArray).toBeDefined();
			expect(productArray).not.toBeNull();
			expect(productArray.length).toBeGreaterThan(0);
		});

		it('shuld return 3 prducts with keyword \'ani\'', function () {
			var keyword = 'ani',
				products = prodFactory.getProductsByKeyword(keyword);

			expect(products).not.toBeNull();
			expect(products.length).toBe(3);
		});
	});
});