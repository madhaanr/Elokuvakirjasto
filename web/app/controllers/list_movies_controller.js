MoviesApp.controller('ListMoviesController', function ($scope, FirebaseService, APIService) {

    $scope.movies = FirebaseService.getMovies();

    $scope.removeMovie = function (movie) {
        FirebaseService.removeMovie(movie);
    };
    $scope.show=false;
    $scope.findMovies = function () {
        $scope.show=true;
        APIService.findMovies($scope.name,$scope.year).success(function (dbMovies) {
            $scope.dbMovies = dbMovies.Search;
            $scope.dbMoviesCount=dbMovies.Search.length;
        });
    };
});