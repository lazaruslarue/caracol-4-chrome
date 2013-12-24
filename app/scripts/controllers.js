angular.module('caracolExtension')
  .controller('NewTabCtrl', function($scope){
    $scope.name = 'yo';
    $scope.bookmarksTree = chrome.bookmarks.getTree(function($scope, data){
      return data[0].children
      
    })
    console.log($scope.bookmarksTree)
  })
  