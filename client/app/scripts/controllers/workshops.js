'use strict';

/**
 * @name clientApp.controller:WorkshopsCtrl
 *
 * @description
 * Workshops Controller.
 */
angular.module('clientApp')
  .controller('WorkshopsCtrl', function (Workshops, $scope, $state, $stateParams) {

    $scope.selectedAuthorId = null;

    var fromDate = moment().startOf('week');
    var untilDate = moment(fromDate).add(6, 'd');

    // Build dates array.
    $scope.days = [];
    moment.range(fromDate, untilDate).by('days', function(moment) {
      $scope.days.push({raw: moment.format('YYYY-MM-DD'), title: moment.format('D/M')});
    });


    Workshops.get(1, fromDate, untilDate)
      .then(function(workshops) {
        $scope.workshops = workshops;
      });

    /**
     * Set the selected item.
     *
     * @param id
     *   The event ID.
     */
    var setSelectedEvent = function(id) {
      $scope.workshops[id].select();
    };

    /** @namespace $stateParams.workshopId */
    if ($stateParams.workshopId) {
      setSelectedEvent($stateParams.workshopId);
    }

    $scope.range = function(min, max) {
      var input = [];
      for (var i = min; i <= max; i++) {
        input.push(i);
      }
      return input;
    };
  });
