'use strict';

/**
 * @ngdoc service
 * @name tofixtheworldApp.ideaFactory
 * @description
 * # ideaFactory
 * Factory in the tofixtheworldApp.
 */
angular.module('SARkit')
  .factory('behaviorFactory', function () {

    var profile = {
      abduction: {
        n: 735,
        p25: .3,
        p50: 2.4,
        p75: 19.3,
        p95: 0,
      },
      // Aircraft missing
      angler: {
        temperate: {
          mtn: {
            n: 25,
            p25: .3,
            p50: 1.5,
            p75: 5.5,
            p95: 9.9,
          },
          flat: {
            n: 62,
            p25: .8,
            p50: 1.6,
            p75: 3.9,
            p95: 14.9,
          },
          dispersion: {
            n: 17,
            p25: 28,
            p50: 50,
            p75: 59,
            p95: 111,
          }
        },
        dry: {
          n: 15,
          p25: 3.2,
          p50: 9.7,
          p75: 10.5,
          p95: 13.0,
        },
      },
      atv: {
        temperate: {
          mtn: {
            n: 19,
            p25: 1.6,
            p50: 3.2,
            p75: 5.6,
            p95: 8.0,
          },
        }
      },
      autistic: {
        temperate: {
          n: 20,
          p25: .6,
          p50: 1.6,
          p75: 3.7,
          p95: 15.2,
        },
        urban: {
          n: 16,
          p25: .3,
          p50: 1.0,
          p75: 3.8,
          p95: 8,
        },
      },
      camper: {
        temperate: {
          mtn: {
            n: 17,
            p25: .2,
            p50: 2.2,
            p75: 3.0,
            p95: 39.5,
          },
          flat: {
            n: 18,
            p25: .2,
            p50: 1.1,
            p75: 3.2,
            p95: 12.8,
          },
        },
        dry: {
          mtn: {
            n: 26,
            p25: .6,
            p50: 1.6,
            p75: 4.2,
            p95: 32.5,
          },
        },
      },
      caver: {
        temperate: {
          n: 7,
          p25: 0,
          p50: .1,
          p75: 0,
          p95: 0,
        },
      },
      child1to3: {
        temperate: {
          mtn: {
            n: 58,
            p25: 0.2,
            p50: 0.3,
            p75: .6,
            p95: 4.5,
          },
          flat: {
            n: 61,
            p25: .2,
            p50: .3,
            p75: 1,
            p95: 3.2,
          },
          dispersion: {
            n: 36,
            p25: 0,
            p50: 23,
            p75: 66,
            p95: 137,
          },
        },
        dry: {
          n: 13,
          p25: .6,
          p50: 1.3,
          p75: 3.9,
          p95: 9.0,
        },
        urban: {
          n: 17,
          p25: .1,
          p50: .3,
          p75: .5,
          p95: .7,
        },
      },
      child4to6: {
        temperate: {
          mtn: {
            n: 38,
            p25: 0.2,
            p50: 0.8,
            p75: 1.5,
            p95: 3.7,
          },
          flat: {
            n: 90,
            p25: .2,
            p50: .6,
            p75: 1.5,
            p95: 6.6,
          },
          dispersion: {
            n: 36,
            p25: 0,
            p50: 23,
            p75: 66,
            p95: 137,
          },

        },
        dry: {
          n: 19,
          p25: .6,
          p50: 1.9,
          p75: 3.2,
          p95: 8.2,
        },
        urban: {
          n: 25,
          p25: .1,
          p50: .5,
          p75: 1,
          p95: 3.4,
        },
      },
      child7to9: {
        temperate: {
          mtn: {
            n: 38,
            p25: .8,
            p50: 1.6,
            p75: 3.2,
            p95: 11.3,
          },
          flat: {
            n: 79,
            p25: .2,
            p50: .8,
            p75: 2.0,
            p95: 8.0,
          },
          dispersion: {
            n: 28,
            p25: 21,
            p50: 40,
            p75: 57,
            p95: 146,
          },
        },
        dry: {
          mtn: {
            n: 18,
            p25: .4,
            p50: 1.2,
            p75: 3.2,
            p95: 7.2,
          },
        },
        urban: {
          n: 22,
          p25: .2,
          p50: .5,
          p75: 1.5,
          p95: 5.2,
        },
      },
      child10to12: {
        temperate: {
          mtn: {
            n: 72,
            p25: .8,
            p50: 1.6,
            p75: 3.2,
            p95: 9,
          },
          flat: {
            n: 57,
            p25: .4,
            p50: 1.6,
            p75: 4.8,
            p95: 10.0,
          },
          dispersion: {
            n: 28,
            p25: 21,
            p50: 40,
            p75: 57,
            p95: 146,
          },
        },
        dry: {
          mtn: {
            n: 22,
            p25: .8,
            p50: 2.0,
            p75: 7.2,
            p95: 16.1,
          },
          flat: {
            n:7,
            p25: 0,
            p50: 0,
            p75: 3.2,
            p95: 0,
          },
        },
        urban: {
          n: 18,
          p25: .3,
          p50: 1.5,
          p75: 2.9,
          p95: 5.8,
        },
      },
      child13to15: {
        temperate: {
          mtn: {
            n: 74,
            p25: .8,
            p50: 2.1,
            p75: 4.8,
            p95: 21.4,
          },
          flat: {
            n: 80,
            p25: .6,
            p50: 1.3,
            p75: 3.2,
            p95: 10,
          },
          dispersion: {
            n: 9,
            p25: 0,
            p50: 6,
            p75: 48,
            p95: 139,
          },
        },
        dry: {
          mtn: {
            n: 19,
            p25: 2.4,
            p50: 3.2,
            p75: 4.8,
            p95: 11.9,
          },
        },
      },
      climber: {
        temperate: {
          n: 25,
          p25: .2,
          p50: 1.6,
          p75: 3.2,
          p95: 14.7,
          dispersion: {
            n: 6,
            p25: 5,
            p50: 28,
            p75: 50,
            p95: 146,
          },
        },
        dry: {
          n: 7,
          p25: 0,
          p50: 4.8,
          p75: 0,
          p95: 0,
        },
      },
      dementia: {
        temperate: {
          mtn: {
            n: 95,
            p25: .3,
            p50: .8,
            p75: 1.9,
            p95: 8.3,
          },
          flat: {
            n: 175,
            p25: .3,
            p50: .8,
            p75: 2.4,
            p95: 12.8,
          },
          dispersion: {
            n: 11,
            p25: 11,
            p50: 23,
            p75: 66,
            p95: 70,
          },
        },
        dry: {
          mtn: {
            n: 14,
            p25: 1,
            p50: 1.9,
            p75: 3.1,
            p95: 6.1,
          },
          flat: {
            n: 15,
            p25: .5,
            p50: 1.6,
            p75: 3.6,
            p95: 11.8,
          },
        },
        urban: {
          n: 336,
          p25: .3,
          p50: 1.1,
          p75: 3.2,
          p95: 12.6,
        },
      },
      despondent: {
        temperate: {
          mtn: {
            n: 103,
            p25: .3,
            p50: 1.1,
            p75: 3.2,
            p95: 21.6,
          },
          flat: {
            n: 193,
            p25: .3,
            p50: .8,
            p75: 2.3,
            p95: 17.3,
          },
          dispersion: {
            n: 6,
            p25: 0,
            p50: 0,
            p75: 3,
            p95: 30,
          },
        },
        dry: {
          mtn: {
            n: 20,
            p25: .8,
            p50: 1.6,
            p75: 3.4,
            p95: 18.0,
          },
          flat: {
            n: 14,
            p25: .5,
            p50: 1.9,
            p75: 3.7,
            p95: 20.7,
          },
        },
        urban: {
          n: 96,
          p25: .1,
          p50: .5,
          p75: 1.5,
          p95: 13.1,
        },
      },
      gatherer: {
        temperate: {
          mtn: {
            n: 94,
            p25: 1.5,
            p50: 3.2,
            p75: 6.4,
            p95: 12.9,
          },
        },
        dry: {
          n: 14,
          p25: 1.6,
          p50: 2.6,
          p75: 5.8,
          p95: 11.1,
        },
      },
      hiker: {
        temperate: {
          mtn: {
            n: 568,
            p25: 1.1,
            p50: 3.1,
            p75: 5.8,
            p95: 18.3,
          },
          flat: {
            n: 274,
            p25: .6,
            p50: 1.8,
            p75: 3.2,
            p95: 9.9,
          },
          dispersion: {
            n: 134,
            p25: 2,
            p50: 23,
            p75: 64,
            p95: 132,
          },
        },
        dry: {
          mtn: {
            n: 221,
            p25: 1.6,
            p50: 3.2,
            p75: 6.5,
            p95: 19.3,
          },
          flat: {
            n: 58,
            p25: 1.3,
            p50: 2.1,
            p75: 6.6,
            p95: 13.1,
          },
          dispersion: {
            n: 28,
            p25: 20,
            p50: 47,
            p75: 124,
            p95: 175,
          },
        },
        urban: {
          n: 8,
          p25: 0,
          p50: 2.6,
          p75: 0,
          p95: 0,
        },
      },
      horsebackrider: {
        n: 17,
        p25: .3,
        p50: 3.2,
        p75: 8.1,
        p95: 19.8,
      },
      hunter: {
        temperate: {
          mtn: {
            n: 355,
            p25: 1,
            p50: 2.1,
            p75: 4.8,
            p95: 17.2,
          },
          flat: {
            n: 465,
            p25: .6,
            p50: 1.6,
            p75: 3.1,
            p95: 13.7,
          },
          dispersion: {
            n: 196,
            p25: 12,
            p50: 45,
            p75: 90,
            p95: 156,
          },
        },
        dry: {
          mtn: {
            n: 138,
            p25: 2.1,
            p50: 4.8,
            p75: 8.1,
            p95: 22.2,
          },
          flat: {
            n: 40,
            p25: 1.6,
            p50: 3.1,
            p75: 6.4,
            p95: 11.3,
          },
        },
      },
      mentalillness: {
        temperate: {
          mtn: {
            n: 23,
            p25: .6,
            p50: 2.3,
            p75: 8.3,
            p95: 14.6,
          },
          flat: {
            n: 23,
            p25: .8,
            p50: 1,
            p75: 2.3,
            p95: 8.1,
          },
        },
        dry: {
          mtn: {
            n: 32,
            p25: 1.7,
            p50: 4,
            p75: 8.2,
            p95: 18.1,
          },
        },
        urban: {
          n: 38,
          p25: .3,
          p50: .6,
          p75: 1.5,
          p95: 12.5,
        },
      },
      mentaldisability: {
        temperate: {
          mtn: {
            n: 31,
            p25: .6,
            p50: 1.6,
            p75: 3.2,
            p95: 11.3,
          },
          flat: {
            n: 36,
            p25: .3,
            p50: 1,
            p75: 2.1,
            p95: 11.8,
          },
        },
        dry: {
          n: 21,
          p25: 1.1,
          p50: 4.0,
          p75: 8.7,
          p95: 62.6,
        },
        urban: {
          n: 44,
          p25: .3,
          p50: .8,
          p75: 3.7,
          p95: 9.9,
        },
      },
      mountainbiker: {
        temperate: {
          mtn: {
            n: 25,
            p25: 3.1,
            p50: 4.0,
            p75: 11.3,
            p95: 25.0,
          },
        },
        dry: {
          n: 21,
          p25: 1.1,
          p50: 4.0,
          p75: 8.7,
          p95: 62.6,
          dispersion: {
            n: 28,
            p25: 21,
            p50: 40,
            p75: 57,
            p95: 146,
          },
        },
        urban: {
          n: 44,
          p25: .3,
          p50: .8,
          p75: 3.7,
          p95: 9.9,
        },
      },
      runner: {
        temperate: {
          n: 14,
          p25: 1.4,
          p50: 2.6,
          p75: 3.4,
          p95: 5.8,
        },
      },
      skieralpine: {
        temperate: {
          mtn: {
            n: 16,
            p25: 1.1,
            p50: 2.7,
            p75: 4.8,
            p95: 15.2,
          },
        },
        dry: {
          n: 8,
          p25: 0,
          p50: 4.8,
          p75: 0,
          p95: 0,
        },
      },
      skiernordic: {
        temperate: {
          mtn: {
            n: 29,
            p25: 1.6,
            p50: 3.5,
            p75: 6.4,
            p95: 19.6,
          },
          flat: {
            n: 0,
            p25: 0,
            p50: 0,
            p75: 0,
            p95: 0,
          },
        },
        dry: {
          mtn: {
            n: 41,
            p25: 1.9,
            p50: 4.3,
            p75: 6.4,
            p95: 19.5,
          },
          dispersion: {
            n: 22,
            p25: 16,
            p50: 48,
            p75: 149,
            p95: 165,
          },
        }
      },
      snowboarder: {
        temperate: {
          mtn: {
            n: 31,
            p25: 1.6,
            p50: 3.2,
            p75: 6.2,
            p95: 15.4,
          },
        },
      },
      snowmobiler: {
        temperate: {
          mtn: {
            n: 26,
            p25: 3.2,
            p50: 6.4,
            p75: 11.1,
            p95: 16.1,
          },
          flat: {
            n: 14,
            p25: .8,
            p50: 2.9,
            p75: 25.5,
            p95: 59.7,
          },
          dispersion: {
            n: 11,
            p25: 7,
            p50: 11,
            p75: 58,
            p95: 169,
          },
        },
        dry: {
          mtn: {
            n: 22,
            p25: 1.0,
            p50: 3.0,
            p75: 8.7,
            p95: 18.9,
          },
        },
      },
      snowshoer: {
        n: 7,
        p25: 0,
        p50: 1.0,
        p75: 0,
        p95: 3.0,
      },
      substanceabuse: {
        temperate: {
          n: 15,
          p25: .3,
          p50: .7,
          p75: 2.6,
          p95: 6.0,
        },
        urban: {
          n: 6,
          p25: 0,
          p50: 1.2,
          p75: 0,
          p95: 0,
        },
      },
      // Vehicles need clarification
      vehicle: {
        n: 84,
        p25: 2.0,
        p50: 5.0,
        p75: 12.,
        p95: 62.67,
      },
      fourwd: {
        n: 19,
        p25: 0.0,
        p50: 3.3,
        p75: 6.4,
        p95: 11.6,
      },
      abandonedvehicle: {
        n: 11,
        p25: .6,
        p50: 2.0,
        p75: 4.4,
        p95: 9.1,
      },
      worker: {
        temperate: {
          mtn: {
            n: 29,
            p25: 1,
            p50: 1.9,
            p75: 3.2,
            p95: 11.8,
          },
          flat: {
            n: 11,
            p25: 0,
            p50: .4,
            p75: 0,
            p95: 0,
          },
        },
      },
      error: {
        n: 0,
        p25: 0,
        p50: 0,
        p75: 0,
        p95: 0,
      },
      dispersionAvg: {
        n: 532,
        p25: 10,
        p50: 30,
        p75: 78,
        p95: 144,
      },
    };

    var validateType = function(type, environment, terrain){
      if (profile[type]){
        if (profile[type][environment]){
          if (profile[type][environment][terrain]){
            return 'terrain'
          } else {
            return 'environment'
          };
        } else {
          return 'type'
        };
    } else {
      return 'error'
    }
  };

    return {
      getDistance: function(type, environment, terrain){

        var validation = validateType(type, environment, terrain)

        if (validation == 'terrain'){
          return profile[type][environment][terrain];
        } else if (validation == 'environment'){
          return profile[type][environment];
        } else if (validation == 'type'){
          return profile[type]
        } else {
          return profile.error;
        }
      },
      getDispersion: function(type, environment, terrain, avgDispersionCheck){

        var validation = validateType(type, environment, terrain)

        if(avgDispersionCheck == true){
          return profile.dispersionAvg;
        } else if (validation == 'terrain'){
          return profile[type][environment][terrain].dispersion;
        } else if (validation == 'environment'){
          return profile[type][environment].dispersion;
        } else if (validation == 'type'){
          return profile[type].dispersion
        } else {
          return profile.error;
        }
      }
    };
  });
