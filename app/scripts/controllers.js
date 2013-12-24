angular.module('caracolExtension')
  .controller('NewTabCtrl', [
    '$scope', 
    'bookMarkService', 
    function($scope, bookMarkService){
      $scope.name = 'yo';
      $scope.bookmarks = bookMarkService;
      
    }]); 
