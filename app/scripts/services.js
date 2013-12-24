angular.module('caracolExtension', [])
  .factory('bookMarkService', ['$http', function($http){
      
      var doGrabBooks = function() {
          return chrome.bookmarks.getTree(function($scope, data){
            return data[0].children
          })
        };
      debugger;
      return {
        marksResults: function(){ return doGrabBooks()}
      };
    }]);
  

  // angular.module('myApp.services', [])
  // .factory('githubService', ['$http', function($http) {

  //   var doRequest = function(username, path) {
  //     return $http({
  //       method: 'JSONP',
  //       url: 'https://api.github.com/users/' + username + '/' + path + '?callback=JSON_CALLBACK'
  //     });
  //   }
  //   return {
  //     events: function(username) { return doRequest(username, 'events'); },
  //   };
  // }]);