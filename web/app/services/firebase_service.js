MoviesApp.service('FirebaseService', function($firebase) {
    var firebaseRef = new Firebase('https://resplendent-inferno-2353.firebaseio.com/movies');
    var sync = $firebase(firebaseRef);
    var movies = sync.$asArray();
    
    this.getMovies = function() {
        return movies;
    };
     
    this.addMovies = function(movie) {
        movies.$add(movie);
    };
});