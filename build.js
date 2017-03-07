var appender = require('file-appender');

var output = require('fs').createWriteStream('./angular.js');

appender(['./lib/angular.min.js', './angular_appender.js']).pipe(output);