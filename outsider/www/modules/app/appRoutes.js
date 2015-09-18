'use strict';
angular.module('main').config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/auth/login');
    $stateProvider  // this state is placed in the <ion-nav-view> in the index.html
        .state('main', {
            url: '/main',
            abstract: true,
            templateUrl: 'modules/app/components/menu/menu.html',
            controller: 'AppCtrl'
        });
});
