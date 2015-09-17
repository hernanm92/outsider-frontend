'use strict';
angular.module('main').config(function ($stateProvider) {
    $stateProvider.state('main.home', {
        url: '/home',
        views: {
            'menuContent': {
                templateUrl: 'modules/activity/components/home/activity.html',
                controller: 'ActivityCtrl'
            },
            'fabContent': {
                template: '',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-activity').classList.toggle('on');
                    }, 200);
                }
            }
        }
    })
    .state('main.gallery', {
        url: '/gallery',
        views: {
            'menuContent': {
                templateUrl: 'modules/activity/components/gallery/gallery.html',
                controller: 'GalleryCtrl'
            },
            'fabContent': {
                template: '',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-gallery').classList.toggle('on');
                    }, 600);
                }
            }
        }
    })
});

