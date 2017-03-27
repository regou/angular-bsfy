'use strict';
var should = require('should/as-function');
var jsdom = require('mocha-jsdom');

describe('angular-bsfy', function () {

	jsdom();

	function getModuleInfo (md){
		return {
			ngv:md.info().angularVersion,
			name:md.name
		}
	}

	const v = require('./package.json').version;

	it('main version match', function () {
		var angular = require('./index.js');
		should(angular.version.full).be.exactly(v);
	});

	it('animate working', function () {
		var info = getModuleInfo(require('./animate.js'));
		should(info.name).be.exactly('ngAnimate');
		should(info.ngv).be.exactly(v);
	});

	it('aria working', function () {
		var info = getModuleInfo(require('./aria.js'));
		should(info.name).be.exactly('ngAria');
		should(info.ngv).be.exactly(v);
	});

	it('cookies working', function () {
		var info = getModuleInfo(require('./cookies.js'));
		should(info.name).be.exactly('ngCookies');
		should(info.ngv).be.exactly(v);
	});

	it('message-format working', function () {
		var info = getModuleInfo(require('./message-format.js'));
		should(info.name).be.exactly('ngMessageFormat');
		should(info.ngv).be.exactly(v);
	});

	it('messages working', function () {
		var name = require('./messages.js').name;
		should(name).be.exactly('ngMessages');
	});

	it('messages working', function () {
		var info = getModuleInfo(require('./messages.js'));
		should(info.name).be.exactly('ngMessages');
		should(info.ngv).be.exactly(v);
	});

	it('parse-ext working', function () {
		var info = getModuleInfo(require('./parse-ext.js'));
		should(info.name).be.exactly('ngParseExt');
		should(info.ngv).be.exactly(v);
	});

	it('resource working', function () {
		var info = getModuleInfo(require('./resource.js'));
		should(info.name).be.exactly('ngResource');
		should(info.ngv).be.exactly(v);
	});

	it('route working', function () {
		var info = getModuleInfo(require('./route.js'));
		should(info.name).be.exactly('ngRoute');
		should(info.ngv).be.exactly(v);
	});

	it('sanitize working', function () {
		var info = getModuleInfo(require('./sanitize.js'));
		should(info.name).be.exactly('ngSanitize');
		should(info.ngv).be.exactly(v);
	});
	
	it('mocks working', function () {
		var o = require('./mocks.js').$Browser;
		should(typeof o === 'function').be.exactly(true);
	});


});
