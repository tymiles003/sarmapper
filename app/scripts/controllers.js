'use strict';
angular.module('SARkit.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, apiFactory) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.loginModal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.loginModal.hide();
  },

  // Open the login modal
  $scope.login = function() {
    $scope.loginModal.show();
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
    $scope.trackModal = modal;
  });

  // Open the login modal
  $scope.addTrack = function() {
    console.log('done')
    $scope.trackModal.show();
  };

  $scope.closeAddTrack = function() {
    $scope.trackModal.hide();
  },

  // Perform the login action when the user submits the login form
  $scope.doAddTrack = function() {
    console.log('Doing login', $scope.trackData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeAddTrack();
    }, 1000);
  }

// Add Operation

  // Form data for the login modal
  $scope.operationData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/addoperation.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.operationModal = modal;
  });

  // Open the login modal
  $scope.addOperation = function() {
    console.log('done')
    $scope.operationModal.show();
  };

  $scope.closeAddOperation = function() {
    $scope.operationModal.hide();
  },

  // Perform the login action when the user submits the login form
  $scope.doAddOperation = function() {
    console.log('Doing login', $scope.operationData);

    apiFactory.addOperation($scope.operationData)
    $scope.closeAddOperation();
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

.controller('OperationsCtrl', function($scope, apiFactory) {
  $scope.operations = apiFactory.operations();
  console.log(angular.fromJson($scope.operations))
})

.controller('OperationCtrl', function($scope, $stateParams) {
  var params = $stateParams;
  $scope.operationId = params.operationId;
})

.controller('TracksCtrl', function($scope, apiFactory) {
  $scope.teams = apiFactory.teams('uniqueid123');
})

.controller('MapCtrl', function($scope, $ionicLoading, $ionicModal, uiGmapGoogleMapApi, apiFactory) {
  $scope.tracks = apiFactory.tracks('uniqueid123');
  var opCenter;
  console.log($scope.tracks)

  apiFactory.operation('uniqueid123').then(function(data) {
    console.log(data);
    opCenter = data;
    $scope.map = { center: { latitude: opCenter.center.latitude, longitude: opCenter.center.longitude }, zoom: 14 };
  }, function(reason) {
    alert('Failed: ' + reason);
  });

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
    $scope.test = function(){
      $scope.tracks.push({latitude: 1, longitude: 23})
    }
    $scope.test1 = function(){apiFactory.sendLocation('uniqueid123','uniqueid1','1')};
  });
});
