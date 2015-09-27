angular.module('main')
.controller('ProfileCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion,
                                    ionicMaterialInk) {
    // Set Header
        $scope.$parent.showHeader();
        $scope.$parent.clearFabs();
        $scope.isExpanded = false;
        $scope.$parent.setExpanded(false);
        $scope.$parent.setHeaderFab(false);

        $scope.user = {
            name: "Shaun White",
            nickname: "Pro-Shaunnie",
            friends: [
                {name: "Kevin Prince Boateng", description: "I love snowboard maaannn"},
                {name: "Marcus Young", description: "BMX Teacher on BMXRules"},
                {name: "Alex Song", description: "Skater Pro, winner of Miami X Games"},
                {name: "Tony Hawk", description: "X Games lover, Skate and surf love."},
                {name: "Robert Lean", description: "WakeBoard passion."}
            ]
        };

        //$scope.user = $usersService.getUser($stateParams.id);


        // Set Motion
        $timeout(function() {
            ionicMaterialMotion.slideUp({
                selector: '.slide-up'
            });
        }, 300);

        $timeout(function() {
            ionicMaterialMotion.fadeSlideInRight({
                startVelocity: 3000
            });
        }, 700);

        // Set Ink
        ionicMaterialInk.displayEffect();
});