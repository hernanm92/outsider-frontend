'use strict';

angular.module('main')
    .controller('LoginCtrl', function($scope, $state, $timeout, $stateParams, ionicMaterialInk) {
        ionicMaterialInk.displayEffect();

        $scope.auth= {};

        $scope.loginClick = function(){
            //todo: call service with auth object;
            //gAuth.login(auth, function (){
            $state.go('main.profile');//todo: put params
            // }, function(response) {
            // $scope.errorMessage= response;
            //}
        }
    });