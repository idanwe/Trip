angular
  .module('Tripio')
  .factory('mapStyles', mapStyles);

function mapStyles() {
  var highlightCountries = [
    // Countries style
    {
      "featureType": "landscape.natural",
      "elementType": "geometry",
      "stylers": [
        { "color": "#ff8080" }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "geometry",
      "stylers": [
        { "weight": 1.5 }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "labels.text.fill",
      "stylers": [
        { "color": "#7a8080" }
      ]
    },

    // Water style
    {
      "featureType": "water",
      "stylers": [
        { "saturation": -70 }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text",
      "stylers": [
        { "visibility": "off" }
      ]
    },

    // Hide irrelevant styles
    {
      "featureType": "administrative.province",
      "stylers": [
        { "visibility": "off" }
      ]
    },
    {
      "featureType": "administrative.locality",
      "stylers": [
        { "visibility": "off" }
      ]
    },
    {
      "featureType": "administrative.neighborhood",
      "stylers": [
        { "visibility": "off" }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "stylers": [
        { "visibility": "off" }
      ]
    },
    {
      "featureType": "road",
      "stylers": [
        { "visibility": "off" }
      ]
    },
    {
      "featureType": "poi",
      "stylers": [
        { "visibility": "off" }
      ]
    },
    {
      "featureType": "transit",
      "stylers": [
        { "visibility": "off" }
      ]
    }
  ];

  var service = {
    highlightCountries: highlightCountries
  };
  return service;
}
