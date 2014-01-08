angular.module('bookmarkService', [])
  .factory( 'bookmarkUtils', function(){
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
      }
    }
  });
