describe('movie controller', function() {

    // mock movie service
    var mockMovieService = {};
    mockMovieService.searchMoviesByTitle = function(uid, imdbID, callback) {
        callback({data:"data"});
    };

    beforeEach(module('bfMoviesWeb'));

    var NewMovieController,
        scope;

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        NewMovieController = $controller('NewMovieController', {
            $scope: scope,
            movieService: mockMovieService
        });
    }));

    it('scope shoud init as false!', function () {
        expect(scope.success).toEqual(false);
    });
});