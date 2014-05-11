'use strict';

describe('Controller: MainCtrl', function () {
  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  var MainCtrl,
    scope,
    mockUserResource,
    location,
    $httpBackend,
    zeroItem = function(){
      return {resultCount: 0,results: []};
    },
    iTunesUrl = 'http://itunes.apple.com/search?callback=JSON_CALLBACK&entity=song&limit=10&media=music';
  // load the controller's module
  beforeEach(module('angularjsApp'));

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector, _$httpBackend_, $controller, $rootScope, $location) {
    location = $location;
    $httpBackend = _$httpBackend_;
    mockUserResource = $injector.get('itunesAPI');
    // $httpBackend.expectJSONP(iTunesUrl).respond(zeroItem());
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));
  afterEach(inject(function($rootScope) {
    $rootScope.$apply();
  }));

  it('should start without song', function () {
    $httpBackend.expectJSONP(iTunesUrl).respond(zeroItem());
    $httpBackend.flush();
  });

  it('should change location', function () {
    scope.query = 'a';
    scope.doSearch();
    $httpBackend.expectJSONP(iTunesUrl).respond(zeroItem());
    expect(location.path()).toBe('/search/' + scope.query);
    $httpBackend.flush();
  });
});
