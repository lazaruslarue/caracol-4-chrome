angular.module('bookmarkService', [])
  .factory( 'bookGetter', function(){
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
        

        // if submit, change to noSubmit

        // if noSubmit, change to waiting
      }
    }
  });
