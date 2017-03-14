app.controller('NewMovieController', ['$scope', 'movieService', '$rootScope', '$http', function($scope, movieService, $rootScope, $http) {
    $scope.newMovieText = "input a new movie please";

    $scope.update = function(movie) {
        // alert(JSON.stringify(movie));
    };

    $scope.getMoviesTypeAhead = function(val) {
        console.log(val);
        return $http.get('https://6lk6s51xv6.execute-api.us-east-1.amazonaws.com/prod/SearchMoviesByTitle', {
            params: {
                title: val
            }
        }).then(function(response){
            return response.data;
        });
    };

    $scope.onSelect = function($item, $model, $label, $event) {
        if ($item) {
            $http.get('https://6lk6s51xv6.execute-api.us-east-1.amazonaws.com/prod/GetMovieById', {
                params: {
                    id: $item.imdbID
                }
            }).then(function(response){
                $scope.movie = response.data;
            });
        }
    }
}]);
