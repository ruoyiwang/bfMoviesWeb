app.controller('MainController', ['$scope', 'movieService', '$rootScope', 'fbService', function($scope, movieService, $rootScope, fbService) {

    // gets the default movies
    movieService.getMovies(function(data) {
        var result = data.data;
        console.log(result);
        $scope.movies = result;

    }, function(err) {
        console.log(err);
    });

    $rootScope.$on('event:social-sign-in-success', function(event, userDetails){
        console.log("logged in");

        console.log(userDetails);

        var uid = userDetails.uid;

        movieService.getMoviesForUser(uid,
            function(data) {
                var result = data.data;
                console.log(result);
                $scope.movies = result;

            }, function(err) {
                console.log(err);
            });
    })
}]);
