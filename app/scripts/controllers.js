angular.module('caracolExtension', ['bookmarkService'])
  .controller('NewTabCtrl', [
    '$scope', 
    'parser', 
    function($scope, parser){
      chrome.bookmarks.getTree(function(data){
        $scope.$apply($scope.bookmarks = data[0]);
      })
      parser($scope.bookmarks)
    }
  ]); 