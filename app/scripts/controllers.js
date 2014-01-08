angular.module('caracolExtension')
  .controller('NewTabCtrl', [ 
            '$scope', '$state', 'bookGetter',   'exportToCaracol', 'processedBookmarks',
    function($scope,  $state,   bookmarkService, exportToCaracol,   processedBookmarks){ 
      $scope.exports = {};
      $scope.bookmarks = {};
      
      var traverseTreeWrapper = function(node){
        var callback = function(node){
          node['caracolSubmitStatus'] = 'alert-info';
          $scope.bookmarks[node.id]= node;
        };
        traverseTree(node, callback);
      }
      var traverseTree = function(node, callback) {
        if (node){
          angular.forEach(node.children, function(v){
            traverseTree(v, callback);
          })
          if (node.url){
            callback(node);
          }
        }
      }

      bookmarkService.getMarks( function(data){$scope.$apply(traverseTreeWrapper(data[0]))} )

      $scope.toggleUrlSubmitStatus=function(id, obj, index) { // add this Url to the the JSON for export to Caracol server
        if ($scope.exports[id]){
          delete $scope.exports[id];
        } else {
          $scope.exports[id] = obj
        }
        bookmarkService.toggleShading(obj.caracolSubmitStatus, obj); 
      }

      $scope.submitUrlsWrapper = function(){
        bookmarkService.submitUrls($scope.exports);
      }
      $state.go('newTab.exportToCaracol')
    }
  ])
  .controller('firstRun', [
    function($scope) {
      $scope.exports = {}

    }
  ])



