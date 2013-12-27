angular.module('caracolExtension', ['bookmarkService'])
  .controller('NewTabCtrl', [
    '$scope', 
    'bookGetter', 
    function($scope, bookmarkService){
      $scope.bookmarks = [];
      bookmarkService.getMarks(function(data){
        for (var i in data[0].children){
          console.log(data[0].children[i])
          $scope.$apply($scope.bookmarks.push(data[0].children[i]));
        }
      });
      
      // bookmarkService.parser($scope.bookmarks)
    }
  ]);