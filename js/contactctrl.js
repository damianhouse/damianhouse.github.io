portfolio.controller('ContactController', [ '$location', '$scope', function($location, $scope){


    $scope.goHome = function() {
      $location.path('/site');
    };

    $scope.goContact = function() {
      $location.path('/contact');
    };

}]);
