angular.module('caracolExtension', [
    'services', 
    'caracolExtension.controllers',
    'ui.router',
    'ngSanitize'
    ])
  .config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider, $http) {
    $urlRouterProvider.otherwise('/start');
    $stateProvider
      .state('popup', {
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
            $state.go('caracol.clippings')
          }
        ]
      })
      .state('caracol.clippings', {
        url: '/start/popup',
        views: {
          "head": {
            templateUrl: 'views/popup-head.html'
          },
          "focus": {
            templateUrl: 'views/popup.html',
            controller: 'fetchmyclippings'
          }
        }
      })
      .state('caracol.suggestions', {
        url: '/start/popup',
        views: {
          "head": {
            templateUrl: 'views/popup-head.html'
          },
          "focus": {
            templateUrl: 'views/popup.html',
            controller: 'fetchmyrecommendations'
          }
        }
      })
    }
  ]
);

