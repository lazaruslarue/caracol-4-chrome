angular.module('caracolExtension.controllers',[])
  .controller('exportCtrl', [ 
            '$scope', '$state',
    function($scope,  $state){ 
      $scope.exports = {};
      $scope.bookmarks = {};
    }
  ])
  .controller('firstrun', [ '$scope', '$state', 'servicefactory',
    function(   $scope,  $state,   services){ 
      var traverseTreeWrapper = function(node){
        var callback = function(node){
          node['caracolSubmitStatus'] = 'panel-info';
          $scope.bookmarks[node.id]= node;
        };
        services.traverseTree(node, callback);
      }
      
      var cb = function(data){$scope.$apply(traverseTreeWrapper(data[0]))}
      services.getMarks( cb );

      $scope.toggleUrlSubmitStatus=function(id, obj) { // add this Url to the the JSON for export to Caracol server
        services.toggleShading(obj.caracolSubmitStatus, obj); 
        if (  obj.caracolSubmitStatus === "panel-danger" ||
              obj.caracolSubmitStatus === "panel-info" ) {
          delete $scope.exports[id];
        } else {
          $scope.exports[id] = obj
        }
      }

      $scope.submitUrlsWrapper = function(){
        services.submitUrls($scope.exports);
        $state.go('caracol.processed')
      }
    }
  ])
  .controller('fetchmyrecommendations',['$scope', '$state', 'servicefactory', 'servicefactory',
    function($scope, $state, services) {
      // get recommendations from caracol server  
      $scope.myrecommendations = {};
    }
  ])
  .controller('fetchmyclippings',['$scope', '$state', 'servicefactory',
    function($scope, $state, services ) {
      console.log('controller running')
      // get clippings from caracol server  
      $scope.myclippings = {};
      var urlPortion = '/fetchmyclippings?batchSize=11&lastId=0'
      var cb = function(data) {
        $scope.myclippings = data;
        console.log('greatness acquired ', data);
      }
      services.getfromserver(cb, urlPortion);
      
    }
  ])



