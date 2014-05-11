'use strict';

angular.module('angularjsApp')
	.controller('MainCtrl', function ($scope, itunesAPI, $routeParams, $location, favorites) {
		$scope.getNav = function(nav){
			return nav === 'search' ? true : false;
		};
		$scope.query = $routeParams.query;
		$scope.allSongsList = itunesAPI.get({term: $scope.query});
		$scope.doSearch = function(){
			$location.path('/search/' + $scope.query);
		};
		$scope.startItem = function(item){
			favorites.startItem(item);
		};
	});
