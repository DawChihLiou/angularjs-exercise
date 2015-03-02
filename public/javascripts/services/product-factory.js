define(['./module'], function (services) {
	'use strict';
		
	services.factory('productFactory', [function () {
		var factory = {},
			products = [
				{
					id: 1,
					name: 'product 1',
					price: 36.99,
					category: 'home',
					description: 'description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. '
				},
				{
					id: 2,
					name: 'product 2',
					price: 23.99,
					category: 'sport',
					description: 'description description description description description description description description.description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. '
				},
				{
					id: 3,
					name: 'product 3',
					price: 43.29,
					category: 'animal',
					description: 'description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. '
				},
				{
					id: 4,
					name: 'product 4',
					price: 3.95,
					category: 'home',
					description: 'description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. '
				},
				{
					id: 5,
					name: 'product 5',
					price: 96.39,
					category: 'home',
					description: 'description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. '
				},
				{
					id: 6,
					name: 'product 6',
					price: 336.99,
					category: 'animal',
					description: 'description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. '
				},
				{
					id: 7,
					name: 'product 7',
					price: 33.99,
					category: 'sport',
					description: 'description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. '
				},
				{
					id: 8,
					name: 'product 8',
					price: 436.99,
					category: 'home',
					description: 'description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. '
				},
				{
					id: 9,
					name: 'product 9',
					price: 46.93,
					category: 'sport',
					description: 'description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. '
				},
				{
					id: 10,
					name: 'product 10',
					price: 32.79,
					category: 'home',
					description: 'description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. '
				},
				{
					id: 11,
					name: 'product 11',
					price: 26.39,
					category: 'office',
					description: 'description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. '
				},
				{
					id: 12,
					name: 'product 12',
					price: 88.88,
					category: 'office',
					description: 'description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. '
				},
				{
					id: 13,
					name: 'product 13',
					price: 77.32,
					category: 'home',
					description: 'description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. '
				},
				{
					id: 14,
					name: 'product 14',
					price: 121.99,
					category: 'animal',
					description: 'description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. description description description description description description description description. '
				},
			];

		factory.products = products;

		return factory;
	}]);
})