MoviesApp.controller('AddMoviesController', function ($scope, currentAuth,FirebaseService, $location) {

    if(!currentAuth) {
        $location.path('/login');
    }
    $scope.addMovie = function (movie) {
        if (movie.title !== undefined && movie.director !== undefined && movie.release !== undefined && movie.description !== undefined) {
            FirebaseService.addMovies(movie);
        }
        $location.path("/movies");
    };
});