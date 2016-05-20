portfolio.controller('WorkController', [ '$location', '$scope' ,'$animate', function($location, $scope, $animate){

  $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    $scope.slides = []
    var currIndex = 0;
    var slides = $scope.slides
    var newWidth = 600 + slides.length + 1;
    $scope.slides = [{
        image: "img/trind-landing.jpg",
        id: currIndex++
      }, {
        image: "img/trind-index.jpg",
        id: currIndex++
      }, {
        image: "img/trind-details.jpg",
        id: currIndex++
      }, {
        image: "img/trind-me.jpg",
        id: currIndex++
      },{
        image: "img/trind-conversations.jpg",
        id: currIndex++
      }];


    $scope.randomize = function() {
      var indexes = generateIndexesArray();
      assignNewIndexesToSlides(indexes);
    };


    // Randomize logic below


    function generateIndexesArray() {
      var indexes = [];
      for (var i = 0; i < currIndex; ++i) {
        indexes[i] = i;
      }
      return shuffle(indexes);
    }

    // http://stackoverflow.com/questions/962802#962890
    function shuffle(array) {
      var tmp, current, top = array.length;

      if (top) {
        while (--top) {
          current = Math.floor(Math.random() * (top + 1));
          tmp = array[current];
          array[current] = array[top];
          array[top] = tmp;
        }
      }

      return array;
    }

}]);
