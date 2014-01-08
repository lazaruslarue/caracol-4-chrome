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
        controller: [ '$scope', '$state', 
          function(   $scope,  $state){ 
            $state.go('newTab.exportToCaracol')
          }
        ]
      })
      .state('newTab.exportToCaracol', {
        url: '/start',
        templateUrl: 'views/exportToCaracol.html',
        controller: [ '$scope', '$state', 'bookmarkUtils',
          function(   $scope,  $state,   bookmarkService){ 
            $scope.exports = {};
            $scope.bookmarks = {};
            
            var traverseTreeWrapper = function(node){
              var callback = function(node){
                node['caracolSubmitStatus'] = 'alert-info';
                $scope.bookmarks[node.id]= node;
              };
              bookmarkService.traverseTree(node, callback);
            }
            // var traverseTree = function(node, callback) {
            //   if (node){
            //     angular.forEach(node.children, function(v){
            //       traverseTree(v, callback);
            //     })
            //     if (node.url){
            //       callback(node);
            //     }
            //   }
            // }

            bookmarkService.getMarks( function(data){$scope.$apply(traverseTreeWrapper(data[0]))} )

            $scope.toggleUrlSubmitStatus=function(id, obj) { // add this Url to the the JSON for export to Caracol server
              bookmarkService.toggleShading(obj.caracolSubmitStatus, obj); 
              if (  obj.caracolSubmitStatus === "alert-danger" ||
                    obj.caracolSubmitStatus === "alert-info" ) {
                delete $scope.exports[id];
              } else {
                $scope.exports[id] = obj
              }
            }

            $scope.submitUrlsWrapper = function(){
              bookmarkService.submitUrls($scope.exports);
              // $state.go('newTab.exportToCaracol')
            }
          $state.go('newTab.exportToCaracol')

          }
        ]
      })
      .state('newTab.processedBookmarks', {
        url: '/start',
        templateUrl: 'views/processedBookmarks.html'
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
