MoviesApp.controller('EditMovieController', function ($scope, FirebaseService,$location,$routeParams) {

    var done = function(movie) {
       $scope.movie=movie;
    }
    
    FirebaseService.getMovie($routeParams.KEY, done);  

    $scope.editMovie = function (movie) {
        FirebaseService.editMovie(movie);
        $location.path('/movies');
    };
});