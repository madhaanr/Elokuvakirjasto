MoviesApp.controller('EditMovieController', function ($scope, FirebaseService, $location, $routeParams) {
    $scope.editedMovie = {};
    var done = function (movie) {
        $scope.movie = movie;
    }

    FirebaseService.getMovie($routeParams.KEY, done);

    $scope.editMovie = function (movie) {
        if (movie.title !== '' && movie.director !== '' && movie.release !== '' && movie.description !== '') {
            FirebaseService.editMovie(movie);
            $location.path('/movies');
        }
    };
});