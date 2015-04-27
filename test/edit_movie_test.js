describe('Edit movie', function () {
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
                editMovie: function (movie) {        
                    var mov={
                            name: 'Joku leffa',
                            director: 'Kalle Ilves',
                            release: 2015,
                            description: 'Mahtava leffa!'
                        }                             
                    mov.name = movie.name;
                    mov.director = movie.director;
                    mov.release = movie.release;
                    mov.description=movie.description;
                    return mov;
                }
            }
        })();
        RouteParamsMock = (function () {
            return {
                KEY: 'abc123'
            }
        })();
        // Lisää vakoilijat
        spyOn(FirebaseServiceMock, 'getMovie').and.callThrough();
        spyOn(FirebaseServiceMock, 'editMovie').and.callThrough();
        
        // Injektoi toteuttamasi kontrolleri tähän
        inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            // Muista vaihtaa oikea kontrollerin nimi!
            controller = $controller('EditMovieController', {
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
     * Testaa, että muokkauslomakkeen tiedot täytetään muokattavan elokuvan tiedoilla.
     * Testaa myös, että Firebasea käyttävästä palvelusta kutsutaan oikeaa funktiota,
     * käyttämällä toBeCalled-oletusta.
     */
    it('should fill the edit form with the current information about the movie', function () {
        expect(scope.movie.name).toBe('Joku leffa');
        expect(FirebaseServiceMock.getMovie).toHaveBeenCalled();
    });
    /* 
     * Testaa, että käyttäjä pystyy muokkaamaan elokuvaa, jos tiedot ovat oikeat
     * Testaa myös, että Firebasea käyttävästä palvelusta kutsutaan oikeaa funktiota,
     * käyttämällä toBeCalled-oletusta.
     */
    it('should be able to edit a movie by its name, director, release date and description', function () {
//        scope.movie.name='Lord of the Rings';
//        scope.movie.release=2000;
//        scope.movie.description='One to rule them all...';
        scope.movie = {name: 'Lord of the Rings', director: "Mm", release: 2000, description: 'One to rule them all...'};
        scope.editMovie(scope.movie);
        expect(scope.movie.name).toBe('Lord of the Rings');
        expect(scope.movie.release).toBe(2000);
        expect(scope.movie.description).toBe('One to rule them all...');
        expect(FirebaseServiceMock.getMovie).toHaveBeenCalled();
        expect(FirebaseServiceMock.editMovie).toHaveBeenCalled();
    });
    /*
     * Testaa, ettei käyttäjä pysty muokkaaman elokuvaa, jos tiedot eivät ole oikeat
     * Testaa myös, että Firebasea käyttävästä palvelusta ei kutsuta muokkaus-funktiota,
     * käyttämällä not.toBeCalled-oletusta.
     */
    it('should not be able to edit a movie if its name, director, release date or description is empty', function () {
        scope.movie = {name: 'Lord of the Rings', director: "Mm", release: 2000, description: 'One to rule them all...'};
        scope.editedMovie = {name: '', director: '', release: '', description: ''};
        scope.editMovie(scope.editedMovie);
        expect(scope.movie.name).toBe('Lord of the Rings');
        expect(scope.movie.release).toBe(2000);
        expect(scope.movie.director).toBe('Mm');
        expect(FirebaseServiceMock.editMovie).not.toHaveBeenCalled();
    });
});