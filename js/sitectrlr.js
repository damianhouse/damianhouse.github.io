portfolio.controller('SiteController', [ '$location', '$scope' ,'$animate', function($location, $scope, $animate){


  $scope.goHome = function() {
    $location.path('/site');
  };

  $scope.goContact = function() {
    $location.path('/contact');
  };

  $scope.goWork = function() {
    $location.path('/work');
  }

}]);
