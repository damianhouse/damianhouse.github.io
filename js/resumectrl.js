portfolio.controller('ResumeController', [ '$location', '$scope', function($location, $scope){


  $scope.goHome = function() {
    $location.path('/site');
  };

  $scope.goContact = function() {
    $location.path('/contact');
  };

  $scope.goResume = function() {
    $location.path('/resume');
  };

}]);
