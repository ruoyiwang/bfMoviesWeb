app.factory('getMovies', ['$http', function($http) {

    return $http({
            method: 'GET',
            url: 'https://6lk6s51xv6.execute-api.us-east-1.amazonaws.com/prod/GetMoviesForUser?uid=1'
        })
        .success(function(data) {
            console.log(data);
            return data;
        })
        .error(function(err) {
            return err;
        });
}]);