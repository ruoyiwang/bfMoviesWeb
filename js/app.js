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
