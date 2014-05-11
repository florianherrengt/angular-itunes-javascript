'use strict';

angular.module('angularjsApp')
  .factory('favorites', function () {
    var STORAGE_ID;
    STORAGE_ID = 'itunes-demo-angularjs';
    return {
      getFavorites: function () {
        return {
          results : JSON.parse(localStorage.getItem(STORAGE_ID) || '[]')
        };
      },
      startItem: function(item) {
        var index = -1, newItem = {};
        /* useless to store all data */
        newItem.artworkUrl60 = item.artworkUrl60;
        newItem.trackName = item.trackName;
        newItem.trackId = item.trackId;

        newItem.started = true;

        /* get position of item in favorites */

        index = angular.toJson(this.getFavorites().results).indexOf(angular.toJson(newItem));
        console.log(this.getFavorites().results, index);
        angular.forEach(this.getFavorites().results, function(track, i){
          if(angular.equals(track, newItem)){
            index = i;
          }
        });
        if (index === -1) {
          this.addFavorites(newItem);
        } else {
          this.removeFavorites(newItem, index);
        }
      },
      addFavorites: function(item) {
        console.log('addFavorites');
        var newFav;
        item.started = true;
        newFav = this.getFavorites().results;
        newFav.push(item);
        localStorage.setItem(STORAGE_ID, JSON.stringify(newFav));
      },
      removeFavorites: function(item, index) {
        console.log('removeFavorites');
        var newFav;
        newFav = this.getFavorites().results;
        newFav.splice(index, 1);
        localStorage.setItem(STORAGE_ID, JSON.stringify(newFav));
      }
    };
  });
