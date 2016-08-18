angular.module('app', [])

.controller('AppController', function ($scope, movieService) {
	$scope.query = "";

	$scope.search = function () {
		movieService.getMovies($scope.query).then(function(data) {
			$scope.movies = data;
		});
	}
})

.factory('movieService', function($http) {
	var getMovies = function(name) {
		return $http.get('http://www.omdbapi.com/?s=' + name).then(function (response) {
			return response.data;
		}, function (err) {
			console.log(err);
		});
	}

	return {
		getMovies: getMovies
	}
});
