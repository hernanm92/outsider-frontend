'use strict';
angular.module('main').config(function ($stateProvider) {
    $stateProvider.state('main.profile', {
        url: '/profile',
        views: {
            'menuContent': {
                templateUrl: 'modules/users/components/profile/profile.html',
                controller: 'ProfileCtrl'
            },
        'fabContent': {
            template: '', //aca se agregan los botones redondos
            controller: function ($timeout) {
                /*$timeout(function () {
                 document.getElementById('fab-profile').classList.toggle('on');
                 }, 800);*/
            }
        }
        }
    })
    .state('main.friends', {
        url: '/friends',
        views: {
            'menuContent': {
                templateUrl: 'modules/users/components/friends/friends.html',
                controller: 'FriendsCtrl'
            },
            'fabContent': {
                template: '',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-friends').classList.toggle('on');
                    }, 900);
                }
            }
        }
    })
});