'use strict';

/**
 * @ngdoc service
 * @name tofixtheworldApp.ideaFactory
 * @description
 * # ideaFactory
 * Factory in the tofixtheworldApp.
 */
angular.module('SARkit')
  .factory('apiFactory', function ($firebase, $q) {

    var operationsTest = {
      uniqueid123: {
        title: 'Kent Lake',
        id: 'massive-earth-298',
        center: {
          lat: 45.323476,
          lng: -121.672341,
        },
        teams: {
          uniqueid1: {
            name: 'Team 1',
            owner: 'id',
            tracks: {
              1: {
                path: [
                  {
                    timestamp: 120938108,
                    latitude: 47,
                    longitude: -74
                  },
                  {
                    latitude: 32,
                    longitude: -89
                  },
                  {
                    latitude: 39,
                    longitude: -122
                  },
                  {
                    latitude: 62,
                    longitude: -95
                  }
                ],
                stroke: {
                  color: '#6060FB',
                  weight: 1
                },
              },
              2: {
                path: [
                  {
                    latitude: 48,
                    longitude: -73
                  },
                  {
                    latitude: 31,
                    longitude: -90
                  },
                  {
                    latitude: 40,
                    longitude: -121
                  },
                  {
                    latitude: 61,
                    longitude: -96
                  }
                ],
                stroke: {
                  color: '#000000',
                  weight: 1
                },
              }
            }
          }
        }
      }
    }

    var ref = new Firebase("https://sarmapper.firebaseio.com/");

    return {
      operations: function(){
        var sync = $firebase(ref.child("operations"));
        var operations = sync.$asObject();
        return operations;
      },
      operation: function(operationId){
        var sync = $firebase(ref.child("operations"));
        var operations = sync.$asObject();

        return $q(function(resolve, reject) {
          operations.$loaded(function() {
            resolve(operations[operationId]);
            console.log(operations[operationId])
          })
        });


      },
      addOperation: function(operationData){
        var sync = $firebase(ref.child("operations"));
        var latitude;
        var longitude;

        var upload = function(){
          var operation = {
            name: operationData.name,
            created: new Date().getTime(),
            center: {
              latitude: latitude,
              longitude: longitude
            }
          };

        sync.$push(operation).then(function(newChildRef) {
          console.log("Added operation with id " + newChildRef.key());
        });
      }

      navigator.geolocation.getCurrentPosition(function(pos) {
        latitude = pos.coords.latitude;
        longitude = pos.coords.longitude;
        upload();
      }, function(error) {
        latitude = 37.746487;
        longitude = -119.533346;
        upload();
      });


      },
      teams: function(operationId){
        var sync = $firebase(ref.child("operations").child(operationId).child("teams"));
        var teams = sync.$asArray();
        return teams;
      },
      tracks: function(operationId){
        var sync = $firebase(ref.child("operations").child(operationId).child("teams").child("uniqueid1").child("tracks").child("1"));
        var tracksObj = sync.$asArray();
        return tracksObj;
      },
      sendLocation: function(operationId, teamId, trackId){
        var sync = $firebase(ref.child("operations").child(operationId).child("teams").child(teamId).child('tracks').child(trackId))
        navigator.geolocation.getCurrentPosition(function(pos) {
          var currentPos = {
            timestamp: new Date().getTime(),
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude
          };
          sync.$push(currentPos).then(function(newChildRef) {
            console.log("added record with id " + newChildRef.key());
          });
        }, function(error) {
          alert('Unable to get location: ' + error.message);
        });

      },
      test: function(){
        var sync = $firebase(ref)
        sync.$push({hello: "world"}).then(function(newChildRef) {
          console.log("added record with id " + newChildRef.key());
        });
      }
    }
  });
