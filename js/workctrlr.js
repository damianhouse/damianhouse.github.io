portfolio.controller('WorkController', [ '$location', '$scope' ,'$animate', function($location, $scope, $animate){

  $scope.slides = [
            {image: 'img/trind-landing.jpg', description: 'Landing Page'},
            {image: 'img/trind-index.jpg', description: 'Event Posts'},
            {image: 'img/trind-details.jpg', description: 'Post Details'},
            {image: 'img/trind-conversations.jpg', description: 'Conversations'},
        ];
        $scope.currentIndex = 0;
         $scope.setCurrentSlideIndex = function (index) {
             $scope.currentIndex = index;
         };
         $scope.isCurrentSlideIndex = function (index) {
             return $scope.currentIndex === index;
         };
         $scope.prevSlide = function () {
             $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
         };
         $scope.nextSlide = function () {
             $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
         };

}]);
