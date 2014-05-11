'use strict';

angular.module('angularjsApp')
  .factory('itunesAPI', function ($resource) {
    // iTunes API
    return $resource('http://itunes.apple.com/search', {},
      {
        get: {
          method: 'JSONP',
          params: {
            callback: 'JSON_CALLBACK',
            media: 'music',
            entity: 'song',
            limit: 10
          }
        }
      }
    );
  });
