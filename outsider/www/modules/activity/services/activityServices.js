'use strict';
angular.module('main').factory('gActivities', function ($http, Config) {
    var URL = Config.ENV.SERVER_URL;
    var urlBase = URL + '/activity/';
    var gUsers = {};
    gUsers.getGralActivity = function () {
        return $http.get(urlBase);
    };
    gUsers.getUserActivity = function (id) {
        return $http.get(urlBase + id);
    };
    gUsers.getFriends = function (id) {
        return $http.get(urlBase + id+'/friends');
    };
    return gUsers;
});
