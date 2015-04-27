describe('Show movie', function () {
    var controller, scope;
    var FirebaseServiceMock, RouteParamsMock;
    beforeEach(function () {
        // Lisää moduulisi nimi tähän
        module('MoviesApp');
        FirebaseServiceMock = (function () {
            return {
                getMovie: function (key, done) {
                    if (key == 'abc123') {
                        done({
                            name: 'Joku leffa',
                            director: 'Kalle Ilves',
                            release: 2015,
                            description: 'Mahtava leffa!'
                        });
                    } else {
                        done(null);
                    }
                },
            }
        })();
        RouteParamsMock = (function () {
            return {
                KEY: 'abc123'
            }
        })();
        // Lisää vakoilijat
        spyOn(FirebaseServiceMock, 'getMovie').and.callThrough();

        // Injektoi toteuttamasi kontrolleri tähän
        inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            // Muista vaihtaa oikea kontrollerin nimi!
            controller = $controller('ShowMovieController', {
                $scope: scope,
                FirebaseService: FirebaseServiceMock,
                $routeParams: RouteParamsMock
            });
        });
    });
    /*
     * Testaa alla esitettyjä toimintoja kontrollerissasi
     */

    /* 
     * Testaa, että Firebasesta (mockilta) saatu elokuva löytyy kontrollerista.
     * Testaa myös, että Firebasea käyttävästä palvelusta kutsutaan oikeaa funktiota
     * käyttämällä toBeCalled-oletusta.
     */
    it('should show current movie from Firebase', function () {
         
        expect(scope.movie.name).toBe('Joku leffa');
        expect(scope.movie.director).toBe('Kalle Ilves');
        expect(FirebaseServiceMock.getMovie).toHaveBeenCalled();
    });
});