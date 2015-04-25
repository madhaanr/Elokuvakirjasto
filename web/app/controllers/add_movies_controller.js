MoviesApp.controller('AddMoviesController', function ($scope, FirebaseService, $location) {

    $scope.addMovie = function (movie) {
        console.log(movie.title+" "+movie.director )
        if (movie.title !== undefined && movie.director !== undefined && movie.release !== undefined && movie.description !== undefined) {
            FirebaseService.addMovies(movie);
        }
        $location.path("/movies");

    };
});