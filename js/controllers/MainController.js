app.controller('MainController', ['$scope', 'getMovies', function($scope, getMovies) {
    $scope.title = 'This is a title';
    $scope.uid = "this is uid";

    getMovies.success(function (data) {
        $scope.movies = data;

    });
    //
    // $scope.movies = [
    //     {
    //         poster: 'img/move.jpg',
    //         title: 'MOVE',
    //         genre: 'MOVE, Inc.',
    //         actors: "temp actor 1"
    //     },
    //     {
    //         poster: 'img/shutterbugg.jpg',
    //         title: 'Shutterbugg',
    //         genre: 'Chico Dusty',
    //         actors: "temp actor 2"
    //     },
    //     {
    //         poster: 'img/gameboard.jpg',
    //         title: 'Gameboard',
    //         genre: 'Armando Perez',
    //         actors: "temp actor 3"
    //     },
    //     {
    //         poster: 'img/forecast.jpg',
    //         title: 'Forecast',
    //         genre: 'Forecast',
    //         actors: "temp actor 4"
    //     }
    // ];
}]);


