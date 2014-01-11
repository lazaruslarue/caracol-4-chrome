angular.module('services', [])
  .factory( 'servicefactory', function($http, $sce){
    return {
      getMarks: function(callback) {
        chrome.bookmarks.getTree(function(data){
          callback(data);
        })
      },
      toggleShading: function(status, node) {
        if ( status === "panel-info" ) {
          node.caracolSubmitStatus = "panel-success"
        } else if ( status === "panel-success" ) {
          node.caracolSubmitStatus = "panel-danger"
        } else if ( status === "panel-danger" ) {
          node.caracolSubmitStatus = "panel-info"
        }

      }, 
      submitUrls: function(exportObj){
        console.log('posting this to Caracol', exportObj )
      },
      traverseTree: function traverseTree(node, callback) {
        if (node){
          angular.forEach(node.children, function(v){
            traverseTree(v, callback);
          })
          if (node.url){
            callback(node);
          }
        }
      }, 
      getfromserver: function(callback, requestType) {
        $http({
          method: 'GET',
          url: 'http://caracol.cloudapp.net' + requestType
        })
        .success(function(data){
          callback(data);
        })
        .error(function(err, status){
          console.log("error: ",err, " status: ", status);
        })
        console.log('service running')
      }
    }
  })
  