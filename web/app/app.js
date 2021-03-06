var MoviesApp = angular.module('MoviesApp', ['firebase', 'ngRoute']);
MoviesApp.config(function ($routeProvider) {
    $routeProvider
            .when('/login', {
                controller: "UserController",
                templateUrl: "app/views/login.html"
            })
            .when('/', {
                controller: "ListMoviesController",
                templateUrl: "app/views/list.html"

            })
            .when('/movies', {
                controller: "ListMoviesController",
                templateUrl: "app/views/list.html",
            })
            .when('/movies/new', {
                controller: "AddMoviesController",
                templateUrl: "app/views/new.html",
                resolve: {
                    currentAuth: function (AuthenticationService) {
                        return AuthenticationService.checkLoggedIn();
                    }
                }
            })
            .when('/movies/:KEY', {
                controller: "ShowMovieController",
                templateUrl: "app/views/show.html",
                resolve: {
                    currentAuth: function (AuthenticationService) {
                        return AuthenticationService.checkLoggedIn();
                    }
                }
            })
            .when('/movies/:KEY/edit', {
                controller: "EditMovieController",
                templateUrl: "app/views/edit.html",
                resolve: {
                    currentAuth: function (AuthenticationService) {
                        return AuthenticationService.checkLoggedIn();
                    }
                }
            })
            .otherwise('/', {
                controller: "ListMoviesController",
                templateUrl: "app/views/list.html"
            });
});
MoviesApp.config(['$httpProvider', function ($httpProvider) {
        delete $httpProvider.defaults.headers.common["X-Requested-With"]
}]);