angular.module('caracolExtension')
  .controller('Main', function($scope){
    $scope.name = 'yo';
    chrome.bookmarks.getTree(function(data){
    console.log(data[0].children)
    

})
    
  })
  