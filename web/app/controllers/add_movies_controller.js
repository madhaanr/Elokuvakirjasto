MoviesApp.controller('AddMoviesController', function ($scope, FirebaseService,$location) {
   
    $scope.addMovie = function () {
        FirebaseService.addMovies({
            title: $scope.title,
            director: $scope.director,
            release: $scope.release,
            description: $scope.description
        });     
        $scope.title="";
        $scope.director="";
        $scope.release="";
        $scope.description="";
        $scope.addForm.$setPristine();
        $location.path("/movies");
    };
});