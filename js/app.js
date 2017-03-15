var app = angular.module("bfMoviesWeb", ['ngRoute', 'socialLogin', 'ngAnimate', 'ui.bootstrap']);

app.config(function(socialProvider){
    socialProvider.setFbKey({appId: "390643314637117", apiVersion: "v2.8"});
});

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: "MainController",
            templateUrl: "views/home.html"
        })
        .when('/new_movie', {
            controller: 'NewMovieController',
            templateUrl: 'views/newMovie.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});

app.controller("NavController", ['$scope', 'movieService', '$rootScope', function($scope, movieService, $rootScope) {
    if ($rootScope.uid) {
        $scope.loggedIn = true;
    }
    else {
        $scope.loggedIn = false;
    }

    $rootScope.$on('event:social-sign-in-success', function(event, userDetails){
        console.log("logged in");
        $scope.loggedIn = true;

        console.log(userDetails);
        $scope.name = userDetails.name;

        var uid = userDetails.uid;
        $rootScope.uid = uid;

        movieService.getMoviesForUser(uid,
            function(data) {
                var result = data.data;
                console.log(result);
                $scope.movies = result;

            }, function(err) {
                console.log(err);
            });
    });
}]);