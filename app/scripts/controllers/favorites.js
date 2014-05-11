'use strict';

angular.module('angularjsApp')
	.controller('FavoritesCtrl', function ($scope, favorites) {
		$scope.getNav = function(nav){
			return nav === 'favorites' ? true : false;
		};
		$scope.allSongsList = favorites.getFavorites();
		$scope.startItem = function(item){
			favorites.startItem(item);
			$scope.allSongsList = favorites.getFavorites();
		};
	});
