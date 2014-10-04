angular-bsfy
==================
A more elegant [Angular JS](http://angularjs.org/) [Browserify](http://browserify.org/) package,and always up to date

Current angular.js version : `1.2.26`


	var angular = require('angular-bsfy');
	var ngAnimate = require('angular-bsfy/animate');
	var ngRoute = require('angular-bsfy/route');
	var ngResource = require('angular-bsfy/resource');

	var app = angular.module('myApp',[
	    ngAnimate.name,
	    ngRoute.name,
	    ngResource.name
	]);