angular-bsfy
==================
[![Build Status via Travis CI](https://travis-ci.org/regou/angular-bsfy.svg?branch=master)](https://travis-ci.org/regou/angular-bsfy)
[![NPM version](https://img.shields.io/npm/v/angular-bsfy.svg)](https://www.npmjs.com/package/angular-bsfy)

A more elegant [AngularJS](http://angularjs.org/) [Browserify](http://browserify.org/) package,and always up to date

Current angular.js version : `1.6.3` [ChangeLog](https://github.com/angular/angular.js/blob/master/CHANGELOG.md)

**Install & Inject:**

`$ npm install angular-bsfy --save`

```javascript
var angular = require('angular-bsfy');

var app = angular.module('myApp',[
	require('angular-bsfy/animate').name,
	require('angular-bsfy/route').name,
	require('angular-bsfy/resource').name
]);
```



**[Webpack Alias](https://webpack.github.io/docs/configuration.html#resolve-alias) for 3rd party libraries:**
```javascript
resolve:{
	alias:{
		'angular':'angular-bsfy'
	}
}
```