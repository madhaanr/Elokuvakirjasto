MoviesApp.controller('ListMoviesController', function($scope,FirebaseService) {
    
    $scope.movies=FirebaseService.getMovies(); 
});