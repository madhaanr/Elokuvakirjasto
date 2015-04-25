describe('Add movie', function () {
    var controller, scope;

    var FirebaseServiceMock;

    beforeEach(function () {
        // Lisää moduulisi nimi tähän
        module('MoviesApp');

        FirebaseServiceMock = (function () {
            var movies = [
               
            ];
            return {
                addMovies: function (movie) {
                    movies.push(movie);
                }
                // Toteuta FirebaseServicen mockatut metodit tähän
            }
        })();

        // Lisää vakoilijat
        spyOn(FirebaseServiceMock, 'addMovies').and.callThrough();

        // Injektoi toteuttamasi kontrolleri tähän
        inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            // Muista vaihtaa oikea kontrollerin nimi!
            controller = $controller('AddMoviesController', {
                $scope: scope,
                FirebaseService: FirebaseServiceMock
            });
        });
    });

    /*
     * Testaa alla esitettyjä toimintoja kontrollerissasi
     */

    /*
     * Testaa, että käyttäjä pystyy lisäämään elokuvan oikeilla tiedoilla.
     * Muista myös tarkistaa, että Firebasen kanssa keskustelevasta palvelusta
     * on kutsutta oikeaa funktiota lisäämällä siihen vakoilijan ja käyttämällä
     * toBeCalled-oletusta.
     */
    it('should be able to add a movie by its name, director, release date and description', function () {
        var movie = 
               {title: "More Girls!",
                director: "Fellini",
                release: 2015,
                description: "Title tells it all"};
        scope.addMovie(movie);
        expect(FirebaseServiceMock.addMovies).toHaveBeenCalled();
    });
 
    /*	
     * Testaa, ettei käyttäjä pysty lisäämään elokuvaa väärillä tiedoilla.
     * Muista myös tarkistaa, että Firebasen kanssa keskustelevasta palvelusta
     * EI kutsuta funktiota, joka hoitaa muokkauksen. Voit käyttää siihen
     * not.toBeCalled-oletusta (muista not-negaatio!).
     */
    it('should not be able to add a movie if its name, director, release date or description is empty', function () {
        var movie = [
               {title: "",
                director: 'jjj',
                release: 2015,
                description: ""}
        ];
        scope.addMovie(movie);
        expect(FirebaseServiceMock.addMovies).not.toHaveBeenCalled();
    });
});