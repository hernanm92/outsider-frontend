'use strict';
angular.module('main').config(function ($stateProvider) {
    $stateProvider.state('main.login', {
    url: '/login',
    views: {
        'menuContent': {
            templateUrl: 'modules/auth/components/login/login.html',
            controller: 'LoginCtrl'
        },
        'fabContent': {
            template: ''
        }
    }
})});