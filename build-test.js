var should = require('should/as-function');
var jsdom = require('mocha-jsdom');

describe('angular-bsfy', function () {

	jsdom();


	it('animate working', function () {
		var name = require('./animate.js').name;
		 should(name).be.exactly('ngAnimate');
	});

	it('aria working', function () {
		var name = require('./aria.js').name;
		should(name).be.exactly('ngAria');
	});

	it('cookies working', function () {
		var name = require('./cookies.js').name;
		should(name).be.exactly('ngCookies');
	});

	it('message-format working', function () {
		var name = require('./message-format.js').name;
		should(name).be.exactly('ngMessageFormat');
	});

	it('messages working', function () {
		var name = require('./messages.js').name;
		should(name).be.exactly('ngMessages');
	});

	it('messages working', function () {
		var name = require('./messages.js').name;
		should(name).be.exactly('ngMessages');
	});

	it('parse-ext working', function () {
		var name = require('./parse-ext.js').name;
		should(name).be.exactly('ngParseExt');
	});

	it('resource working', function () {
		var name = require('./resource.js').name;
		should(name).be.exactly('ngResource');
	});

	it('route working', function () {
		var name = require('./route.js').name;
		should(name).be.exactly('ngRoute');
	});

	it('sanitize working', function () {
		var name = require('./sanitize.js').name;
		should(name).be.exactly('ngSanitize');
	});

	it('sanitize working', function () {
		var name = require('./sanitize.js').name;
		should(name).be.exactly('ngSanitize');
	});
	
	it('mocks working', function () {
		var o = require('./mocks.js').$Browser;
		should(typeof o === 'function').be.exactly(true);
	});


});
