MoviesApp.controller('ShowMovieController', function ($scope, FirebaseService, $routeParams) {

    var done = function (movie) {
        $scope.movie = movie;
    };
     
    FirebaseService.getMovie($routeParams.KEY, done);
    
});
