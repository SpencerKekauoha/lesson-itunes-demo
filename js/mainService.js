angular.module('gridApp').service('mainService', function($http, $q){

  this.getArtist = function(artist) {
      var deferred = $q.defer();
      $http({
        method: "JSONP",
        url: 'https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK',
      }).then(function(response) {
        var parsedResponse = response.data.results
        console.log(response);
        // for (var i = 0; i < parsedResponse.length; i++) {
        //   // parse something
        // }
        deferred.resolve(parsedResponse)
      })
      return deferred.promise;
    }

});
