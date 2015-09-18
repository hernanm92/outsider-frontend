'use strict';
angular.module('main').config(function ($stateProvider) {
    $stateProvider.state('search', {
        url: 'search',
        abstract: true,
        templateUrl: 'index.html'
    }).state('search.search', {
        url: '/search',
        templateUrl: 'modules/search/components/bar/search.html',
        controller: 'SearchCtrl'
    })});