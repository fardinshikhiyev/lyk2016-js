angular.module('app', ['ngRoute'])

.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.html",
				controller:  "AppController"
    })
	.when("/detail/:id", {
			templateUrl: "detail.html",
			controller: "DetailController"
		})
})

.controller('DetailController', function($scope, $routeParams, movieService) {
	var imdbID = $routeParams.id;

  movieService.getDetail(imdbID).then(function(data) {
    $scope.details = data;
    console.log(data);
  });

})

.controller('AppController', function ($scope, movieService, $location) {
	$scope.query = "";

	$scope.search = function () {
		movieService.getMovies($scope.query).then(function(data) {
			$scope.movies = data;
		});
	}

	$scope.openDetail = function (id) {
		$location.path('/detail/' + id)
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

  var getDetail = function(imdbID) {
    return $http.get('http://www.omdbapi.com/?i=' + imdbID + '&plot=short&r=json')
    .then(function (response) {
      return response.data;
    }, function (err) {
      console.log(err);
    });
  }

	return {
		getMovies: getMovies,
    getDetail: getDetail
	}
});
