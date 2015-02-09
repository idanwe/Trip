angular
  .module('Tripio')
  .controller('MapCtrl', MapCtrl);

function MapCtrl($scope, mapStyles) {
  $scope.map = {
    center: {
      latitude: 0,
      longitude: 0
    },
    zoom: 2,
    options: {
      styles: mapStyles.highlightedCountries
    }
  };
};
