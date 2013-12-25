angular.module('caracolExtension', ['bookmarkService'])
  .controller('NewTabCtrl', [
    '$scope', 
    'thing', 
    function($scope){
      $scope.name = 'yo';
      chrome.bookmarks.getTree(function(data){
        $scope.$apply($scope.bookmarks = data);
      })
    }
  ]); 