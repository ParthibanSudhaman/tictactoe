(function () {
    'use strict';
    var app = angular.module('', ['ngRoute', 'ngAnimate']);

    app.value('signalRServer', 'http://localhost:64316');

    app.config(function ($routeProvider) {
        $routeProvider
        .when('/',
        {
            controller: '',
            templateUrl: ''
        })
        .otherwise({ redirectTo: '/' });
    });
}());