var app = angular.module('theApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		template: ''
	})
	.otherwise();
});