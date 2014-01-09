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
            template:'<nav\
             style="\
              position: fixed;\
              top: 0;\
              width:100%;\
              background-color:white;\
              border: 1px;\
              ">\
                <img style="position: fixed; right:0;" src="images/caracol3.png">\
                <h5>Your Caracol Clippings</h5>\
              </nav>'
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

