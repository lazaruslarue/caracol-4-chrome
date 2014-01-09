angular.module('services', [])
  .factory( 'servicefactory', function($http){
    return {
      getMarks: function(callback) {
        chrome.bookmarks.getTree(function(data){
          callback(data);
        })
      },
      toggleShading: function(status, node) {
        if ( status === "alert-info" ) {
          node.caracolSubmitStatus = "alert-success"
        } else if ( status === "alert-success" ) {
          node.caracolSubmitStatus = "alert-danger"
        } else if ( status === "alert-danger" ) {
          node.caracolSubmitStatus = "alert-info"
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
  