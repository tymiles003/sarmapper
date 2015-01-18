'use strict';
// Ionic Starter App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('SARkit', [
  'ionic',
  'config',
  'SARkit.controllers',
  'uiGmapgoogle-maps',
  'firebase'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function(uiGmapGoogleMapApiProvider) {
  uiGmapGoogleMapApiProvider.configure({
    key: 'AIzaSyBWe3gyWRZ_pSU5N5iuaSIQK0bFaWMZcD8',
    v: '3.17',
    libraries: 'weather,geometry,visualization'
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })

    .state('app.search', {
      url: '/search',
      views: {
        'menuContent' :{
          templateUrl: 'templates/search.html'
        }
      }
    })

    .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent' :{
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.behavior', {
      url: '/behavior',
      views: {
        'menuContent' :{
          templateUrl: 'templates/behavior.html',
          controller: 'BehaviorCtrl'
        }
      }
    })
    .state('app.operations', {
      url: '/operations',
      views: {
        'menuContent' :{
          templateUrl: 'templates/operations.html',
          controller: 'OperationsCtrl'
        }
      }
    })
    .state('app.operation', {
      url: '/operations/:operationId',
      views: {
        'menuContent' :{
          templateUrl: 'templates/operation.html',
          controller: 'OperationCtrl'
        }
      }
    })
    .state('app.tracks', {
      url: '/tracks',
      views: {
        'menuContent' :{
          templateUrl: 'templates/tracks.html',
          controller: 'TracksCtrl'
        }
      }
    })
    .state('app.map', {
      url: '/map',
      views: {
        'menuContent' :{
          templateUrl: 'templates/map.html',
          controller: 'MapCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/operations');
});
