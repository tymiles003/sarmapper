'use strict';
angular.module('SARkit.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  },

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  }

  // Form data for the login modal
  $scope.trackData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/addtrack.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeAddTrack = function() {
    $scope.modal.hide();
  },

  // Open the login modal
  $scope.addTrack = function() {
    console.log('done')
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doAddTrack = function() {
    console.log('Doing login', $scope.trackData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeAddTrack();
    }, 1000);
  }


})


.controller('BehaviorCtrl', function($scope, behaviorFactory) {
  $scope.behavior = {
    model: 'hiker',
    environment: 'temperate',
    terrain: 'flat',
    avgDispersion: false
  }


  $scope.updateBehavior = function(){
    $scope.behavior.distances = behaviorFactory.getDistance($scope.behavior.model, $scope.behavior.environment, $scope.behavior.terrain);
    $scope.behavior.dispersion = behaviorFactory.getDispersion($scope.behavior.model, $scope.behavior.environment, $scope.behavior.terrain, $scope.avgDispersion);
  }

  $scope.updateBehavior();

})

.controller('OperationsCtrl', function($scope, trackFactory) {
  $scope.operations = trackFactory.operations();
})

.controller('OperationCtrl', function($scope, $stateParams) {
})

.controller('TracksCtrl', function($scope, $stateParams, trackFactory) {
  $scope.teams = trackFactory.teams('uniqueid123');
})

.controller('MapCtrl', function($scope, $ionicLoading, $ionicModal, uiGmapGoogleMapApi, trackFactory) {
  $scope.map = { center: { latitude: 37.746487, longitude: -119.533346 }, zoom: 8 };
  $scope.tracks = trackFactory.tracks('uniqueid123');
  uiGmapGoogleMapApi.then(function(maps) {
    $scope.centerOnMe = function() {

      if(!$scope.map) {
        return;
      }

      $scope.loading = $ionicLoading.show({
        content: 'Getting current location...',
        showBackdrop: false
      });

      navigator.geolocation.getCurrentPosition(function(pos) {
        $scope.map.center = {
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude
        }
        $ionicLoading.hide($scope.loading);
      }, function(error) {
        alert('Unable to get location: ' + error.message);
      });

    };
    $scope.test = function(){trackFactory.sendLocation('uniqueid123','uniqueid1','1')};
  });
});
