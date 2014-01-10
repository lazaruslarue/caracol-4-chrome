angular.module('caracolExtension', [
    'services', 
    'caracolExtension.controllers',
    'ui.router'
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
            $state.go('caracol.popup')
          }
        ]
      })
      .state('caracol.popup', {
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
      .state('suggestions', {
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
    }
  ]
);

