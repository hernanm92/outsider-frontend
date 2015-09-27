angular.module('main')

    .controller('FriendsCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
        $scope.friends= [
            {name: "Kevin Prince Boateng", description: "I love snowboard maaannn"},
            {name: "Marcus Young", description: "BMX Teacher on BMXRules"},
            {name: "Alex Song", description: "Skater Pro, winner of Miami X Games"},
            {name: "Tony Hawk", description: "X Games lover, Skate and surf love."},
            {name: "Robert Lean", description: "WakeBoard passion."}
        ];
        // Set Header
        $scope.$parent.showHeader();
        $scope.$parent.clearFabs();
        $scope.$parent.setHeaderFab('left');

        // Delay expansion
        $timeout(function() {
            ionicMaterialMotion.fadeSlideInRight({
                startVelocity: 3000
            });
        }, 700);

        // Set Motion
        ionicMaterialMotion.fadeSlideInRight();

        // Set Ink
        ionicMaterialInk.displayEffect();
    });