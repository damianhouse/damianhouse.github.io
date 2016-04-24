'use strict';

/* App Module */

var damianportfolioApp = angular.module('damianportfolioApp', [
  'ngRoute'
]);

damianportfolioApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'assets/landingpage.html',
        controller: 'LandingPageCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
