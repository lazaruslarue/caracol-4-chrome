angular.module('caracolExtension', ['bookmarkService'])
  .controller('NewTabCtrl', [
    '$scope', 
    '$element', 
    'bookGetter', 
    function($scope, $element, bookmarkService){
      $scope.exports = {};
      $scope.bookmarks = [];
      
      bookmarkService.getMarks( 
        function(data){
          $scope.$apply(angular.forEach(data[0].children, 
            function(val,key, col ){
              $scope.bookmarks.push(val.children)
        }))
      })

      $scope.queueUrl=function(id, obj) { // add this Url to the the JSON for export to Caracol server
        if ($scope.exports[id]){
          console.log ('blah ')
          delete $scope.exports[id];
        } else {
          $scope.exports[id] = obj
        }
      }

      $scope.submitUrls = function(objForExport) {
        console.log('posting this to Caracol', objForExport )
        // $http({
        //   method: 'POST',
        //   data: objForExport
        // })

      }
    }
  ])
  // .controller('ExportControl', [
  //   function($scope) {
  //     $scope.exports = {}

  //   }
  // ])



