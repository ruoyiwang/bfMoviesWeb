app.controller('NewMovieController', ['$scope', 'movieService', '$rootScope', '$http', function($scope, movieService, $rootScope, $http) {
    $scope.newMovieText = "input a new movie please";

    $scope.update = function(movie) {
        console.log(movie);
        console.log($rootScope.uid);

        var data = {
            "imdbID":movie.imdbID,
            "uid":$rootScope.uid
        };

        // empty config is good enough
        var config = { };

        $http.post('https://6lk6s51xv6.execute-api.us-east-1.amazonaws.com/prod/AddUserToMovie', data, config)
            .then(function(resp) {

            }, function(err){

            });

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
