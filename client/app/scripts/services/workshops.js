'use strict';

/**
 * @name clientApp.events
 * @description
 * # events
 * Service in the clientApp.
 */
angular.module('clientApp')
  .service('Workshops', function ($q, $http, $timeout, Config, $rootScope) {

    // A private cache key.
    var cache = {};

    // Update event broadcast name.
    var broadcastUpdateEventName = 'LuzcEventsChange';

    /**
     * Return the promise with the events list, from cache or the server.
     *
     * @param groupId
     *   The group ID.
     * @param fromDate
     * @param untilDate
     *
     * @returns {*}
     */
    this.get = function(groupId, fromDate, untilDate) {
      var cacheId = groupId;
      if (cache && cache[cacheId]) {
        return $q.when(cache[cacheId].data);
      }

      return getDataFromBackend(groupId, fromDate, untilDate);
    };

    /**
     * Return workshops array from the server.
     *
     * @param groupId
     *   The group ID.
     * @param fromDate
     * @param untilDate
     *
     * @returns {$q.promise}
     */
    function getDataFromBackend(groupId, fromDate, untilDate) {
      var cacheId = groupId;
      var deferred = $q.defer();
      var url = Config.backend + '/api/workshops';
      var params = {
        sort: 'date,start_time',
        from_date: fromDate.format('YYYY-MM-DD'),
        until_date: untilDate.format('YYYY-MM-DD')
      };

      $http({
        method: 'get',
        url: url,
        params: params,
        transformResponse: orderWorkshopsByDays
      }).success(function(response) {
        setCache(cacheId, response);
        deferred.resolve(response);
      });

      return deferred.promise;
    }

    /**
     * Save cache, and broadcast en event to inform that the data changed.
     *
     * @param cacheId
     *   The cache ID.
     * @param data
     *   Object with the data to cache.
     */
    var setCache = function(cacheId, data) {
      // Cache data by group ID.
      cache[cacheId] = {
        data: data,
        timestamp: new Date()
      };

      // Clear cache in 60 seconds.
      $timeout(function() {
        if (cache.data && cache.data[cacheId]) {
          cache.data[cacheId] = null;
        }
      }, 60000);

      // Broadcast a change event.
      $rootScope.$broadcast(broadcastUpdateEventName);
    };

    /**
     * Divide the workshops into daily arrays.
     */
    function orderWorkshopsByDays(list) {
      var days = {};

      // Convert response serialized to an object.
      list = angular.fromJson(list).data;

      angular.forEach(list, function(workshop) {
        if (!days[workshop.date]) {
          days[workshop.date] = [];
        }
        days[workshop.date].push(workshop);
      });

      return days;
    }

    $rootScope.$on('clearCache', function() {
      cache = {};
    });

  });
