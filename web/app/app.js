var MoviesApp = angular.module('MoviesApp', ['firebase', 'ngRoute']);
MoviesApp.config(function ($routeProvider) {
    $routeProvider
            .when('/', {
                controller: "ListMoviesController",
                templateUrl: "app/views/list.html"
            })
            .when('/movies', {
                controller: "ListMoviesController",
                templateUrl: "app/views/list.html"
            })
            .when('/movies/new', {
                controller: "AddMoviesController",
                templateUrl: "app/views/new.html"
            })
            .when('/movies/:KEY', {
                controller: "ShowMovieController",
                templateUrl: "app/views/show.html"
            })
            .when('/movies/:KEY/edit', {
                controller: "EditMovieController",
                templateUrl: "app/views/edit.html"
            });
});