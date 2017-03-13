app.controller('MainController', ['$scope', 'movieService', function($scope, movieService) {

    // gets the default movies
    movieService.getMovies(function(data) {
        var result = data.data;
        console.log(result);
        $scope.movies = result;

    }, function(err) {
        console.log(err);
    });
}]);
