angular.module('caracolExtension', [
    'bookmarkService', 
    'caracolExtension.controllers',
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
            $state.go('newTab.export')
          }
        ]
      })
      .state('newTab.export', {
        url: '/start/export',
        templateUrl: 'views/export.html',
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
              $state.go('newTab.processed', {exports: $scope.exports})
            }
          }
        ]
      })
      .state('newTab.processed', {
        url: '/start/processed',
        views: {
          "export": {
            templateUrl: 'views/suggested.html', 
            controller: [ '$scope', '$state', 'bookmarkUtils',
              function(   $scope,  $state,   bookmarkService){ 
            }]
          },
          "processed": {
            templateUrl: 'views/processed.html',
            controller: [ '$scope', '$state', 'bookmarkUtils',
              function(   $scope,  $state,   bookmarkService){ 
            }]
          }
        },
         
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
