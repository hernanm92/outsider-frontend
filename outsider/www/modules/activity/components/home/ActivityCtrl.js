'use strict';

angular.module('main')


    .controller('ActivityCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
        $scope.$parent.showHeader();
        $scope.$parent.clearFabs();
        $scope.isExpanded = false;
        $scope.$parent.setExpanded(false);
        $scope.$parent.setHeaderFab('right');
        $scope.commentAvailable= false;
        $scope.activity= [
            {owner: {name: 'Kevin Prince Boateng', description: 'Profesional snowboarder'},
                description: 'Awesome trick 360 , ' +
            'watch it and ty it! En invierno venganse al cerro catedral a probar', title: 'Snowboard trick',
            likes: 25, comments: [{owner: {name: 'Marcus Young'}, description: 'Wow I loved it'}]},
            {owner: {name: 'Kevin Prince Boateng', description: 'Profesional snowboarder'},
                description: 'Awesome trick 360 , ' +
            'watch it and ty it! En invierno venganse al cerro catedral a probar', title: 'Snowboard trick',
            likes: 25, liked:true, comments: [{owner: {name: 'Marcus Young'}, description: 'Wow I loved it'}]},
            {owner: {name: 'Kevin Prince Boateng', description: 'Profesional snowboarder'},
                description: 'Awesome trick 360 , ' +
            'watch it and ty it! En invierno venganse al cerro catedral a probar', title: 'Snowboard trick',
            likes: 25, comments: [{owner: {name: 'Marcus Young'}, description: 'Wow I loved it'}]},
            {owner: {name: 'Kevin Prince Boateng', description: 'Profesional snowboarder'},
                description: 'Awesome trick 360 , ' +
            'watch it and ty it! En invierno venganse al cerro catedral a probar', title: 'Snowboard trick',
            likes: 25, comments: [{owner: {name: 'Marcus Young'}, description: 'Wow I loved it'}]}
        ];

        $scope.likeVideo= function (videoId) {
            //todo: like
        };

        $scope.makeComment= function (videoId){
            //todo: solo el de este video deberia habilitarse
            $scope.commentAvailable= true;
        };

        $scope.commentVideo= function (videoId) {
            //todo: comment
        };

        $timeout(function() {
            ionicMaterialMotion.fadeSlideIn({
                selector: '.animate-fade-slide-in .item'
            });
        }, 200);

        // Activate ink for controller
        ionicMaterialInk.displayEffect();
    });