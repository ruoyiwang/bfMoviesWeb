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

    this.addMovieForUser = function(uid, imdbID, callback, error) {
        var data = {
            "imdbID":imdbID,
            "uid":uid
        };

        // empty config is good enough
        var config = { };

        $http.post('https://6lk6s51xv6.execute-api.us-east-1.amazonaws.com/prod/AddUserToMovie', data, config)
            .then(callback, error);
    };

    this.searchMoviesByTitle = function(title, callback, error) {
        return $http.get('https://6lk6s51xv6.execute-api.us-east-1.amazonaws.com/prod/SearchMoviesByTitle', {
            params: {
                title: val
            }
        }).then(callback, error);
    };

    this.getMovieById = function(imdbID, callback, error) {
        $http.get('https://6lk6s51xv6.execute-api.us-east-1.amazonaws.com/prod/GetMovieById', {
            params: {
                id: imdbID
            }
        }).then(callback, error);
    }
}]);
