MoviesApp.controller('EditMovieController', function ($scope, FirebaseService, $location,$routeParams) {

    $scope.editMovie = function (movie) {
        FirebaseService.editMovie(movie);      
    };
});