'use strict';

/* App Module */

var portfolio = angular.module('portfolio', ['ngRoute', 'ngAnimate']
);

portfolio.config(function($routeProvider) {
  $routeProvider
      .when('/contact', {
        templateUrl: 'partials/contact.html',
        controller: 'ContactController'
      })
      .when('/', {
        templateUrl: 'partials/site.html',
        controller: 'SiteController'
      })
      .when('/work', {
        templateUrl: 'partials/work.html',
        controller: 'WorkController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
