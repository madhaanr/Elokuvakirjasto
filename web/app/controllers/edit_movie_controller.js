MoviesApp.controller('EditMovieController', function ($scope, FirebaseService, $location, $routeParams) {
    $scope.editedMovie = {};

    var done = function (movie) {
        $scope.movie = movie;
        $scope.editedMovie = $scope.movie;      
    };

    FirebaseService.getMovie($routeParams.KEY, done);

    $scope.editMovie = function () {
        if ($scope.editedMovie.title !== '' && $scope.editedMovie.director !== '' && $scope.editedMovie.release !== '' && $scope.editedMovie.description !== '') {
            FirebaseService.editMovie($scope.editedMovie);
            $location.path('/movies');
        }
    };
});