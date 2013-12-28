angular.module('bookmarkService', [])
  .factory( 'bookGetter', function(){
    return {
      getMarks: function(callback) {
        chrome.bookmarks.getTree(function(data){
          callback(data);
        })
      }
    }
  });
