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

app.controller("NavController", ['$scope', 'movieService', '$rootScope', '$location', function($scope, movieService, $rootScope, $location) {
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

    // register listener to watch route changes
    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
        if ( $rootScope.uid == null ) {
            // no logged user, we should be going to #login
            if ( next.templateUrl == "/" ) {
                // already going to #login, no redirect needed
            } else {
                // not going to #login, we should redirect now
                $location.path( "/" );
            }
        }
    });
}]);