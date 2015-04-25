describe('Movie list', function(){
	var controller, scope;

	var FirebaseServiceMock;

  	beforeEach(function(){
  		// Lisää moduulisi nimi tähän
    	module('MoviesApp');

    	FirebaseServiceMock = (function(){
                         var movies = [
                             {title: "Hi Girls!",
                              director: "sum guy",
                              release: 2015,
                              description: "girls"},
                             {title: "Girls Girls Girls",
                              director: "Some other guy",
                              release: 2012,
                              description: "girls on beach"}
                            ];
			return {
                            getMovies:function() {
                                return movies;
                            },
                            addMovies:function(movie) {
                                movies.push(movie);
                            }
				// Toteuta FirebaseServicen mockatut metodit tähän
			}
		})();

		// Lisää vakoilijat
	    // spyOn(FirebaseServiceMock, 'jokuFunktio').and.callThrough();

    	// Injektoi toteuttamasi kontrolleri tähän
	    inject(function($controller, $rootScope) {
	      scope = $rootScope.$new();
	      // Muista vaihtaa oikea kontrollerin nimi!
	      controller = $controller('ListMoviesController', {
	        $scope: scope,
	        FirebaseService: FirebaseServiceMock
	      });
	    });
  	});

  	/*
  	* Testaa alla esitettyjä toimintoja kontrollerissasi
  	*/

  	/*
  	* Testaa, että Firebasesta (mockilta) saadut elokuvat löytyvät konrollerista
  	* Testaa myös, että Firebasea käyttävästä palvelusta kutsutaan oikeaa funktiota,
  	* käyttämällä toBeCalled-oletusta.
  	*/ 
	it('should list all movies from the Firebase', function(){
		expect(scope.movies.length).toBe(2);
                expect(scope.messages[0].title).toBe('Hi girls!');
                expect(scope.messages[1].director).toBe('Some other guy!');
	});

	/* 
	* Testaa, että elokuvan pystyy poistamaan Firebasesta.
	* Testaa myös, että Firebasea käyttävästä palvelusta kutsutaan oikeaa funktiota,
  	* käyttämällä toBeCalled-oletusta.
	*/
	it('should be able to remove a movie', function(){
		expect(true).toBe(false);
	});
});