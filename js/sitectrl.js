portfolio.controller('SiteController', [ '$location', '$scope', function($location, $scope){


  $scope.goHome = function() {
    $location.path('/site');
  };

  $scope.goContact = function() {
    $location.path('/contact');
  };

}]);
