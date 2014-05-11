'use strict';

angular
  .module('angularjsApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/search', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/search/:query', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/favorites', {
        templateUrl: 'views/main.html',
        controller: 'FavoritesCtrl'
      })
      .otherwise({
        redirectTo: '/search'
      });
  });
