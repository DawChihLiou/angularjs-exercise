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

			ctrlr = $controller('indexController', {
				'$rootScope': rootScope,
				'$scope': scope
			});

			spyOn(scope, 'viewCart').and.callThrough();

		}));

		it('should direct user to cart view', function () {
			
			scope.viewCart();
			expect(location.path()).toBe('/cart');

		});
	});	
});