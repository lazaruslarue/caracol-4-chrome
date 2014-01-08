angular.module('caracolExtension.controllers',[])
  .controller('exportCtrl', [ 
            '$scope', '$state',
    function($scope,  $state){ 
      $scope.exports = {};
      $scope.bookmarks = {};
    }
  ])
  .controller('firstRun', [
    function($scope) {
      $scope.exports = {}

    }
  ])



