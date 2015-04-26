MoviesApp.controller('ShowMovieController', function ($scope, FirebaseService, $routeParams) {

    var done = function (movie) {
        $scope.movie = movie;
    };
    
    $scope.getMovie = function () {
        FirebaseService.getMovie($routeParams.KEY, done);
    };
});
