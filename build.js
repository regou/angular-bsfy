var appender = require('file-appender');

var output = require('fs').createWriteStream('./angular_append.js');

appender(['./lib/angular.min.js', './angular_appender.js']).pipe(output);