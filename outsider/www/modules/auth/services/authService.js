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


//'use strict';
//angular.module('main').factory('gSalables', function ($http, Config) {
//    var URL = Config.ENV.SERVER_URL;
//    var urlBase = URL + '/restapi/catalog/salables';
//    var gSalables = {};
//    gSalables.getSalables = function () {
//        return $http.get(urlBase + '/');
//    };
//    gSalables.getSalableFromSha = function (sha) {
//        return $http.get(urlBase + '/sha/' + sha);
//    };
//    gSalables.getSalable = function (id) {
//        return $http.get(urlBase + '/' + id);
//    };
//    gSalables.getFeatures = function (id) {
//        return $http.get(urlBase + '/' + id + '/features');
//    };
//    gSalables.getStocks = function (id, availableOnly) {
//        return $http.get(urlBase + '/' + id + '/stocks', {
//            params: {
//                availableOnly: availableOnly
//            }
//        });
//    };
//    gSalables.list = function (categoryId, queryString) {
//        return $http.get(urlBase, {
//            params: {
//                categoryId: categoryId,
//                queryString: queryString
//            }
//        });
//    };
//    gSalables.listPaginating = function (categoryId, queryString, pageNumber, pageSize, maxResults) {
//        return $http.get(urlBase, {
//            params: {
//                categoryId: categoryId,
//                queryString: queryString,
//                pageNumber: pageNumber,
//                pageSize: pageSize,
//                maxResults: maxResults
//            }
//        });
//    };
//
//    gSalables.listSimilars = function (salableId) {
//        return $http.get(urlBase + '/' + salableId + '/similars');
//    };
//    gSalables.listSuggestions = function (salableId, recommendedOnly) {
//        return $http.get(urlBase + '/' + salableId + '/suggestions', {
//            params: {
//                recommendedOnly: recommendedOnly
//            }
//        });
//    };
//
//    gSalables.suggest = function (categoryId, queryString, maxResults) {
//        return $http.get(urlBase + '/suggestions/', {
//            params: {
//                categoryId: categoryId,
//                queryString: queryString,
//                maxResults: maxResults
//            }
//        });
//    };
//    gSalables.getSHAFromUrl = function (url) {
//        var array = url.split('/');
//        return array[array.length - 1];
//    };
//    return gSalables;
//});
