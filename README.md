angular-bsfy
==================
[![Build Status via Travis CI](https://travis-ci.org/regou/angular-bsfy.svg?branch=master)](https://travis-ci.org/regou/angular-bsfy)
[![NPM version](https://img.shields.io/npm/v/angular-bsfy.svg)](https://www.npmjs.com/package/angular-bsfy)

A more elegant [AngularJS](http://angularjs.org/) [Browserify](http://browserify.org/) package,and always up to date

Current angular.js version : `1.5.9` [ChangeLog](https://github.com/angular/angular.js/blob/master/CHANGELOG.md)

`$ npm install angular-bsfy --save`

	var angular = require('angular-bsfy');

	var app = angular.module('myApp',[
	    require('angular-bsfy/animate').name,
	    require('angular-bsfy/route').name,
	    require('angular-bsfy/resource').name
	]);
