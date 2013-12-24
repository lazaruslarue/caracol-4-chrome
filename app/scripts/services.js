angular.module('caracolExtension')
  .service('Bookmarks', function($scope){
    var bookmarksGrabber = function($scope) {
      $scope.things = chrome.bookmarks.getTree(function($scope, data){
        return data[0].children
      })
    }
    bookmarksGrabber();
    console.log($scope.things)
  })
  