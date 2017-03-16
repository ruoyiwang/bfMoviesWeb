app.controller('NewMovieController', ['$scope', 'movieService', '$rootScope', function($scope, movieService, $rootScope) {

    $scope.success = false;

    $scope.update = function(movie) {
        console.log(movie);
        console.log($rootScope.uid);

        movieService.addMovieForUser($rootScope.uid, movie.imdbID, function(response) {
            $scope.success = true;
            $scope.movie = {};
            $scope.search = {};
        });
    };

    $scope.getMoviesTypeAhead = function(val) {
        $scope.success = false;

        return movieService.searchMoviesByTitle(val, function(response){
            return response.data;
        });
    };

    $scope.onSelect = function($item, $model, $label, $event) {
        if ($item) {
            movieService.getMovieById($item.imdbID, function(response){
                $scope.movie = response.data;
            });
        }
    };
}]);
