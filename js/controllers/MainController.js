app.controller('MainController', ['$scope', 'movieService', '$rootScope', '$filter', function($scope, movieService, $rootScope, $filter) {

    function showAllMovies() {
        movieService.getMovies(function (data) {
            var result = data.data;
            console.log(result);
            $scope.movies = result;

        }, function (err) {
            console.log(err);
        });
    }

    function showMoviesForCurrentUser() {
        movieService.getMoviesForUser($rootScope.uid,
            function (data) {
                var result = data.data;
                console.log(result);
                $scope.movies = result;

            }, function (err) {
                console.log(err);
            });
    }


    if ($rootScope.uid) {
        showMoviesForCurrentUser();
    }
    else {
        // start with all movies shown
        showAllMovies();
    }

    $rootScope.$watch("uid", function(newVal, oldval) {
        // gets the default movies
        if (newVal) {
            showMoviesForCurrentUser();
        }
        else {
            showAllMovies();
        }
    });
}]);
