'use strict';
angular.module('main').factory('gActivities', function ($http, Config) {
    var URL = Config.ENV.SERVER_URL;
    var urlBase = URL + '/activity/';
    var gActivity = {};

    gActivity.getGralActivity = function () {
        return $http.get(urlBase);
    };

    gActivity.getUserActivity = function (id) {
        return $http.get(urlBase + id);
    };

    gActivity.likeVideo= function (videoId) {
        return $http.get(urlBase + 'video/'+videoId+'/like');
    };

    gActivity.commentVideo= function (videoId, comment) {
        return $http.get(urlBase + 'video/'+videoId+'/comment/'+comment);
    };


    return gActivity;
});
