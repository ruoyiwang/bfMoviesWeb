app.controller('MainController', ['$scope', 'movieService', '$rootScope', '$filter', function($scope, movieService, $rootScope, $filter) {

    // method for showering all movies
    function showAllMovies() {
        movieService.getMovies(function (data) {
            var result = data.data;
            console.log(result);
            $scope.movies = result;

        }, function (err) {
            console.log(err);
        });
    }

    // method for only showing movies for this user
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

    // show different sets depends on if the user is logged in
    if ($rootScope.uid) {
        showMoviesForCurrentUser();
    }
    else {
        // start with all movies shown
        showAllMovies();
    }

    // watch when user is logging in
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
