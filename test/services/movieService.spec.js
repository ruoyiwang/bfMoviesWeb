describe('movie service', function() {

    beforeEach(module('bfMoviesWeb'));

    var movieService;

    beforeEach(inject(function (_movieService_) {
        movieService = _movieService_;
    }));

    it('scope shoud init as false!', function () {
        movieService.getMoviesForUser(2, function(response) {
            expect(response).not.toBe(null);
        });
    });
});