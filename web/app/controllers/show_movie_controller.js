MoviesApp.controller('ShowMovieController', function ($scope, currentAuth, $location,FirebaseService, $routeParams) {
    if(!currentAuth) {
        $location.path('/login');
    }
    var done = function (movie) {
        $scope.movie = movie;
    };
     
    FirebaseService.getMovie($routeParams.KEY, done);
    
});
