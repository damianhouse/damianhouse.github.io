'use strict';

/* App Module */

var portfolio = angular.module('portfolio', ['ngRoute']
);

portfolio.config(function($routeProvider) {
  $routeProvider
      .when('/resume', {
        templateUrl: 'partials/resume.html',
        controller: 'ResumeController'
      })
      .when('/', {
        templateUrl: 'partials/site.html',
        controller: 'SiteController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
