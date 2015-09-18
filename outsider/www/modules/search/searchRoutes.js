'use strict';
angular.module('main').config(function ($stateProvider) {
    $stateProvider.state('main.search', {
        url: '/search',
        views: {
            'menuContent': {
                templateUrl: 'modules/search/components/bar/search.html',
                controller: 'SearchCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })});