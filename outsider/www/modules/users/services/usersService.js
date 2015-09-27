'use strict';
angular.module('main').factory('gUsers', function ($http, Config) {
    var URL = Config.ENV.SERVER_URL;
    var urlBase = URL + '/users/';
    var gUsers = {};
    gUsers.getUsers = function () {
        return $http.get(urlBase);
    };
    gUsers.getUser = function (id) {
        return $http.get(urlBase + id);
    };
    gUsers.getFriends = function (id) {
        return $http.get(urlBase + id+'/friends');
    };
    return gUsers;
});
