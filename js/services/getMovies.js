app.service('movieService', ['$http', function($http) {

    this.getMovies = function(callback, error) {
        return $http({
            method: 'GET',
            url: 'https://6lk6s51xv6.execute-api.us-east-1.amazonaws.com/prod/GetMoviesForUser'
        }).then(callback, error);
    };


    this.getMoviesForUser = function(uid, callback, error) {
        return $http({
            method: 'GET',
            url: 'https://6lk6s51xv6.execute-api.us-east-1.amazonaws.com/prod/GetMoviesForUser?uid='+uid
        }).then(callback, error);
    };


}]);
