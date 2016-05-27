'use strict';

/* App Module */

var portfolio = angular.module('portfolio', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'ngTouch']
);

portfolio.config(function($routeProvider) {
  $routeProvider
      .when('/contact', {
        templateUrl: 'partials/contact.html',
        controller: 'ApplicationController'
      })
      .when('/', {
        templateUrl: 'partials/site.html',
        controller: 'ApplicationController'
      })
      .when('/work', {
        templateUrl: 'partials/work.html',
        controller: 'WorkController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
