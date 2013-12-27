angular.module('caracolExtension', ['bookmarkService'])
  .controller('NewTabCtrl', [
    '$scope', 
    'bookGetter', 
    function($scope, bookmarkService){
     bookmarkService.getMarks(function(data){
        $scope.$apply($scope.bookmarks = data[0]);
      });
      // parser($scope.bookmarks)
    }
  ]);