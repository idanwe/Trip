angular.module('Tripio')
  .config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
    function($urlRouterProvider, $stateProvider) {
      $urlRouterProvider.otherwise('/map');

      $stateProvider
        .state('map', {
          url: '/map',
          templateUrl : 'client/map/map.tpl',
          controller: 'MapCtrl'
        });
}]);
