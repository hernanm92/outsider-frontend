'use strict';

angular.module('main', [])
    .controller('LoginCtrl', function($scope, $timeout, $stateParams, ionicMaterialInk) {
        console.log('we are insiiiiideeeee')
        $scope.$parent.clearFabs();
        $timeout(function() {
            $scope.$parent.hideHeader();
        }, 0);
        ionicMaterialInk.displayEffect();
    });