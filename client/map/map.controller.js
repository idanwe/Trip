angular
  .module('Tripio')
  .controller('MapCtrl', MapCtrl);

function MapCtrl($scope) {
  $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
};


