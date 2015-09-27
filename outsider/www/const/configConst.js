'use strict';
angular.module('main').constant('Config', {
    // gulp environment: injects environment vars
    // https://github.com/mwaylabs/generator-m#gulp-environment
    ENV: {
        /*inject-env*/
        //'SERVER_URL': 'http://10.0.1.119:8080',
        'SERVER_URL': 'http://localhost:8080', //todo: see which port this will be
        'GRAYLOG_URL': 'http://10.0.1.85:12666/gelf'
        /*endinject*/
    },
    // gulp build-vars: injects build vars
    // https://github.com/mwaylabs/generator-m#gulp-build-vars
    BUILD: {}
});