angular.module('bookmarkService', [])
  .factory('parser', function(){
    return function(){console.log(arguments)}
  });
  
