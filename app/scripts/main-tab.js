angular.module('caracolExtension', [
    'services', 
    'caracolExtension.controllers',
    'ui.router',
    'ngSanitize'
    ])
  .config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider, $http) {
    $urlRouterProvider.otherwise('/start');
    $stateProvider
      .state('newTab', {
        url: '/start',
        templateUrl: 'tab.html',
        controller: [ '$scope', '$state', 
          function(   $scope,  $state){ 
            $state.go('caracol')
          }
        ]
      })
      .state('caracol', {
        url: '/start',
        templateUrl: 'views/main.html',
        controller: [ '$scope', '$state', 
          function(   $scope,  $state){ 
            $scope.exports = {};
            $scope.bookmarks = {};
            $state.go('caracol.export')
          }
        ]
      })
      .state('caracol.export', {
        url: '/start/export',
        views: {
          "head": {
            templateUrl: 'views/header.html'
          },
          "focus": {
            templateUrl: 'views/firstrun.html',
            controller: 'firstrun'
          }, 
          "right": {
            templateUrl: 'views/export.html',
            controller: 'exportCtrl'
          }
        }
      })
      .state('caracol.processed', {
        url: '/start/processed',
        views: {
          "head": {
            templateUrl: 'views/header.html'
          },
          "focus": {
            templateUrl: 'views/suggested.html',
            controller: 'fetchmyrecommendations'
          },
          "right": {
            templateUrl: 'views/userBookmarks.html', 
            controller: 'fetchmyclippings'
          },
          "foot": {
            templateUrl: 'views/processed.html',
            controller: [ '$scope', '$state', 'servicefactory',
              function(   $scope,  $state,   services){ 
            }]
          }
        },
         
      })
}]);

