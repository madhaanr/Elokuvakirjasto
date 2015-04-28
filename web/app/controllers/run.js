MoviesApp.run(function (AuthenticationService, $rootScope) {
    $rootScope.logOut = function () {
        AuthenticationService.logUserOut();
        $rootScope.userLoggedIn = AuthenticationService.getUserLoggedIn();
    };

    $rootScope.userLoggedIn = AuthenticationService.getUserLoggedIn();

});