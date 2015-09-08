'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('EventsCtrl', function ($scope, events, authors, $state, $stateParams, $log) {

    // Initialize values.
    $scope.events = events;
    $scope.authors = authors;
    $scope.selectedAuthorId = null;

    /**
     * Set the selected item.
     *
     * @param int id
     *   The event ID.
     */
    var setSelectedEvent = function(id) {
      $scope.events[id].select();
    };

    /**
     * Set the selected item.
     *
     * @param int id
     *   The event ID.
     */
    var selectedAuthorId = function(id) {
      $scope.selectedAuthorId = id;
    };

    if ($stateParams.eventId) {
      setSelectedEvent($stateParams.eventId);
    }

    if ($stateParams.userId) {
      selectedAuthorId($stateParams.userId);
    }
  });
