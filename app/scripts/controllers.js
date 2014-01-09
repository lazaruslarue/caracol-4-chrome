angular.module('caracolExtension.controllers',[])
  .controller('exportCtrl', [ 
            '$scope', '$state',
    function($scope,  $state){ 
      $scope.exports = {};
      $scope.bookmarks = {};
    }
  ])
  .controller('firstRun', [ '$scope', '$state', 'bookmarkUtils',
    function(   $scope,  $state,   bookmarkService){ 
      var traverseTreeWrapper = function(node){
        var callback = function(node){
          node['caracolSubmitStatus'] = 'alert-info';
          $scope.bookmarks[node.id]= node;
        };
        bookmarkService.traverseTree(node, callback);
      }

      bookmarkService.getMarks( function(data){$scope.$apply(traverseTreeWrapper(data[0]))} )

      $scope.toggleUrlSubmitStatus=function(id, obj) { // add this Url to the the JSON for export to Caracol server
        bookmarkService.toggleShading(obj.caracolSubmitStatus, obj); 
        if (  obj.caracolSubmitStatus === "alert-danger" ||
              obj.caracolSubmitStatus === "alert-info" ) {
          delete $scope.exports[id];
        } else {
          $scope.exports[id] = obj
        }
      }

      $scope.submitUrlsWrapper = function(){
        bookmarkService.submitUrls($scope.exports);
        $state.go('caracol.processed')
      }
    }
  ])



