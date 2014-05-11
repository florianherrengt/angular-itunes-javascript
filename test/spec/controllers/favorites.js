'use strict';

describe('Controller: FavoritesCtrl', function () {
  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });
  beforeEach(module('angularjsApp'));

  var FavoritesCtrl,
    scope, newItem;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FavoritesCtrl = $controller('FavoritesCtrl', {
      $scope: scope
    });
  }));

  it('should select favorites nav menu', function () {
    expect(scope.getNav('favorites')).toBe(true);
  });

  it('should attach some favorites', function () {
    expect(scope.allSongsList).toBeDefined();
  });

  it('should startItem', function () {
    expect(scope.startItem).toBeDefined();
  });

  it('should add item', function () {
    newItem = {trackName: 'test', artworkUrl60: 'url'};
    scope.startItem(newItem);
    newItem.started = true;
    expect(scope.allSongsList.results[0]).toEqualData(newItem);
  });

  it('should remove item', function () {
    scope.startItem(newItem);
    expect(scope.allSongsList.results.length).toBe(0);
  });

});
