'use strict';

/* App Module */

var portfolio = angular.module('portfolio', ['ngRoute']
);

portfolio.config(function($routeProvider) {
  $routeProvider

      .when('/contact', {
        templateUrl: 'partials/contact.html',
        controller: 'ContactController'
      })
      .when('/site', {
        templateUrl: 'partials/site.html',
        controller: 'SiteController'
      })
      .otherwise({
        redirectTo: '/site'
      });
  });
