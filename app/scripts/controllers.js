angular.module('caracolExtension', ['bookmarkService'])
  .controller('NewTabCtrl', [
    '$scope', 
    '$element', 
    'bookGetter', 
    function($scope, $element, bookmarkService){
      
      $scope.bookmarks = [];
      
      bookmarkService.getMarks(
        function(data){
          $scope.$apply(angular.forEach(data[0].children, 
            function(val,key, col ){
              $scope.bookmarks.push(val.children)
        }))
      })

      

    }
  ])
  // .controller('ExportControl', [
  //   function($scope) {
  //     $scope.exports = {}

  //   }
  // ])



