'use strict';

/* App Module */

var damianportfolioApp = angular.module('damianportfolioApp', [
  'ngRoute'
]);

damianportfolioApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      .when('/contact', {
        templateUrl: 'partials/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/site', {
        templateUrl: 'partials/site.html',
        controller: 'SiteCtrl'
      })
      .otherwise({
        redirectTo: '/site'
      });
  }]);
