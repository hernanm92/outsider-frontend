'use strict';
angular.module('main').config(function ($stateProvider) {
    $stateProvider.state('auth', {
        url: '/auth',
        abstract: true,
        templateUrl: 'index.html'
    }).state('auth.login', {
    url: '/login',
    templateUrl: 'modules/auth/components/login/login.html',
    controller: 'LoginCtrl'
})});