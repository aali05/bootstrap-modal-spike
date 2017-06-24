var myApp = angular.module('myApp', ['ngRoute', 'ui.bootstrap']);

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: '/views/pages/adminLanding.html',
            controller: 'AdminController as ac'
        })
        .when('/default', {
            templateUrl: '/views/pages/default.html',
            controller: 'DefaultController as dc'
        })
        .otherwise({
            redirectTo: 'home'
        });

    $locationProvider.html5Mode(true);
}]);
