'use strict';
angular.module('main').factory('gAuth', function ($http, Config, $window) {
    var urlBase = Config.ENV.SERVER_URL + '/restapi/auth'; //todo: see how to set up environment and api url , ask horse
    var auth = {};
    auth.login = function (user, pass) {
        return $http.post(urlBase + '/login', {
            username: user,
            password: pass
        }).then(function () {
            $window.sessionStorage.authenticated = 'true';
        }, function (response) {
            delete $window.sessionStorage.authenticated;
            throw response;
        });
    };
    auth.getCurrentUser = function(){
        return $http.get(urlBase + '/users/current');
    };
    auth.logout = function () {
        return $http.post(urlBase + '/logout').then(function () {
            delete $window.sessionStorage.authenticated;
        });
    };
    auth.isAuthenticated = function () {
        return $window.sessionStorage.authenticated === 'true';
    };
    return auth;
}).run(function ($rootScope, $state, gAuth) {
    $rootScope.$on('$stateChangeStart', function (event, toState) {
        // Not authenticated. Go to login...
        if (!gAuth.isAuthenticated() && toState.name !== 'auth.login') {
            $state.go('auth.login');
            event.preventDefault();
        }
    });
});
