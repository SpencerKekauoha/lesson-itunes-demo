angular.module('gridApp').controller('mainCtrl', function($scope, mainService){

  $scope.gridOptions = {
        data: 'songData',
        height: '110px',
        sortInfo: {fields: ['Song', 'Artist', 'Collection', 'Type'], directions: ['asc']},
        columnDefs: [
          {field: 'previewUrl', displayName: 'Play', width: '40px', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><a href="{{row.getProperty(col.field)}}"><img src="http://www.icty.org/x/image/Miscellaneous/play_icon30x30.png"></a></div>'},
          {field: 'artistName', displayName: 'Artist'},
          {field: 'collectionName', displayName: 'Collection'},
          {field: 'artworkUrl30', displayName: 'Album Art', width: '110px', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><img src="{{row.getProperty(col.field)}}"></div>'},
          {field: 'kind', displayName: 'Type'},
          {field: 'collectionPrice', displayName: 'Collection Price'},
        ]
    };

  $scope.getSongData = function() {
      mainService.getArtist($scope.artist).then(function(dataFromService) {
        $scope.songData = dataFromService;
        console.log($scope.songData);
      })
    }

});
