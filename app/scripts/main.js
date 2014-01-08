angular.module('caracolExtension', [
    'bookmarkService', 
    'ui.router'
    ])
  .config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/start');
 
    $stateProvider
      .state('newTab', {
        url: '/start',
        templateUrl: 'tab.html',
        controller: [ '$scope', '$state', 'bookGetter',
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
              $state.go('newTab.processedBookmarks')
            }
        ]
      })
      .state('newTab.processedBookmarks', {
        url: '/start',
        templateUrl: 'views/processedBookmarks.html'
      })
      .state('newTab.exportToCaracol', {
        url: '/start',
        templateUrl: 'views/exportToCaracol.html'
        
      })
      // .state('newTab.caracolUserBar', {
      //   url: '/caracolUserBar',
      //   templateUrl: 'views/caracolUserBar.html'
      // })
      // .state('newTab.userBookmarks', {
      //   url: '/userBookmarks',
      //   templateUrl: 'views/userBookmarks.html'
      // })
      // .state('newTab.suggestedBookmarks', {
      //   url: '/suggestedBookmarks',
      //   templateUrl: 'views/suggestedBookmarks.html'
      // })
}]);
